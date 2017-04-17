const rolesData = require('./services/roles.js')
const settingsData = require('./services/settings.js')
const pagesData = require('./services/pages.js')


// ### ifEmptyCreate(model, data)
/**
 * If the model is empty then populate it's data
 * @param {object} model Mongoose Model
 * @param {object|object[]} data Object data or Array of Object data to insert
 * @return {function} Returns a method to be called by configure
 */
function ifEmptyCreate(name, data) {

  return async () => {

    let [ err, found ] = await to( this.service(name).find({query: {}}) )

    if(!err) {
      if(found && Number.isInteger(found.total) && Array.isArray(found.data)) {
        found = found.data
      }
      if(found.length !== 0) { return false }

      let [ err ] = await to( this.service(name).create(data) )

      if(!err) {
        console.log('default ' + name  + ' created')
      } else {
        console.log('trouble seeding ' + name + ': ', err)
      }
    } else {
      console.log('trouble seeding ' + name + ': ', err)
    }
  }
}

// ### resetData(model, data)
/**
 * Erases all data in the model and calls ifEmptyCreate
 * @param {object} model Mongoose model
 * @param {object|object[]} data Data to insert
 */
function resetData(name, data) {
  return async () => {
    const query = {}

    let [err, response] = await to(this.service(name).remove(null, { query }))

    if(!err) {
      ifEmptyCreate(name, data)()
    } else {
      console.log("trouble resetting data for " + name, err)
    }
  }
}

function removeData(name) {
  return async () => {
    console.log('resetting ' + name);
    return await to(this.service(name).remove(null, { query:{} }))
  }
}


module.exports = function() {
  const app = this

  ifEmptyCreate = ifEmptyCreate.bind(this)
  resetData = resetData.bind(this)
  removeData = removeData.bind(this)

  app.configure(ifEmptyCreate('roles', rolesData))
  app.configure(ifEmptyCreate('settings', settingsData))
  app.configure(ifEmptyCreate('pages', pagesData))

  let reset_seed = process.env.RESET_SEED && typeof process.env.RESET_SEED === 'string'? process.env.RESET_SEED.toLowerCase(): process.env.RESET_SEED

  if(reset_seed === "true") {
    console.log('resetting site data')
    app.configure(resetData('roles', rolesData))
    removeData('users')()
    removeData('settings')()
  }
}