const missing = require('../views/missing.vue')

module.exports = (resolve, reject) => {
  (async function() {
    var [ page, err ] = await to(global.services.page.get())
    if(err) {
      return resolve(missing)
    } else {
      const chosenTemplate = _.get(global, `templates[${page.template}]`)
      resolve(chosenTemplate ? chosenTemplate : missing)
    }
  })()
}