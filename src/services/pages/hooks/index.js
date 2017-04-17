const globalHooks = require('../../../hooks')
const hooks = require('feathers-hooks')
const auth = require('feathers-authentication').hooks

const notifySubscribers = require('./notify-subscribers')
const convertForIncoming = require('./convert-for-incoming')
const convertForOutgoing = require('./convert-for-outgoing')
const { deleteMenu, createMenu, updateMenu } = require('./mirror-menus')

const permissionName = 'editContent'
const restriction = { published: true }

exports.before = {
  all: [],
  find: [
    // auth.verifyOrRestrict(restriction),
    // auth.populateOrRestrict(restriction),
    // globalHooks.isEnabled(),
    // globalHooks.hasPermissionOrRestrict(permissionName, restriction)
  ],
  get: [
    auth.verifyOrRestrict(restriction),
    auth.populateOrRestrict(restriction),
    globalHooks.isEnabled(),
    globalHooks.hasPermissionOrRestrict(permissionName, restriction),
  ],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName),
    convertForIncoming()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName),
    notifySubscribers(),
    convertForIncoming()
  ],
  patch: [
    globalHooks.allowUpsert(),
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName),
    notifySubscribers(),
    convertForIncoming()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName)
  ]
}

exports.after = {
  all: [
  ],
  find: [
    convertForOutgoing()
  ],
  get: [
    convertForOutgoing()
  ],
  create: [
    createMenu(),
  ],
  update: [
    updateMenu(),

  ],
  patch: [
    updateMenu(),
  ],
  remove: [
    deleteMenu()
  ]
}
