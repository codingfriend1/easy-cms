const missing = require('../views/missing.vue')

module.exports = (resolve, reject) => {
  (async function() {
    var [ err, page ] = await to(global.services.page.get())
    if(err || !page) {
      return resolve(missing)
    } else {
      const chosenTemplate = _.get(global.templates, page.template)
      resolve(chosenTemplate ? chosenTemplate : missing)
    }
  })()
}