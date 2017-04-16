const views = {
  // inject views
  home: require("./views/home.vue"),
  login: require("./views/login.vue"),
  missing: require("./views/missing.vue"),
  // end inject views
}

const lookup_template = require('./services/lookup-template')


module.exports = [
  {
    path: '/login/:type?/:slug?',
    name: 'Login',
    component: views.login,
    meta: {
      subtitle: ''
    }
  },
  {
    path: '/',
    component: lookup_template
  },
  {
    path: '/*page',
    component: lookup_template
  }
]
