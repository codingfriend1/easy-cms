'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const permissionName = 'editContent';
const restriction = {};

exports.before = {
  all: [],
  find: [
    auth.verifyOrRestrict(restriction),
    auth.populateOrRestrict(restriction),
    globalHooks.isEnabled()
  ],
  get: [
    auth.verifyOrRestrict(restriction),
    auth.populateOrRestrict(restriction),
    globalHooks.isEnabled(),
  ],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.updateByPermission()
  ],
  update: [
    auth.verifyToken(restriction),
    auth.populateUser(restriction),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.updateByPermission()
  ],
  patch: [
    globalHooks.allowUpsert(),
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.updateByPermission()
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.updateByPermission()
  ]
};

exports.after = {
  all: [],
  find: [
    globalHooks.filterByPermissionOrRestrict()
  ],
  get: [
    globalHooks.filterByPermissionOrRestrict()
  ],
  create: [],
  update: [],
  patch: [],
  remove: []
};
