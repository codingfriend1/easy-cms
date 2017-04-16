const endpoints = require('./endpoints.service.js')

const api = {
  roles: new endpoints('roles'),
  users: new endpoints('users'),
  messages: new endpoints('messages'),
  auth: new endpoints('auth/local'),
  authManagement: new endpoints('authManagement'),
  custom: new endpoints('custom'),
  pages: new endpoints('pages'),
  comments: new endpoints('comments'),
  bans: new endpoints('bans'),
  menus: new endpoints('menus'),
  media: new endpoints('images'),
  settings: new endpoints('settings'),
  "import": new endpoints('import'),
  staging: new endpoints('staging'),
  importExport: new endpoints('import-export'),
  subscribe: new endpoints('subscribe')
};

global.api = api
module.exports = api
