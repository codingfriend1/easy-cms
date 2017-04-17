const errors = require('feathers-errors');
const areCommentsPermitted = require('./are-comments-permitted');
const prependSlash = require('./prepend-slash');
const isApproved = require('./is-approved');
const recaptcha = require('./google-recaptcha');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const permissionName = 'moderateComments';
const restriction = {approved: true};

exports.before = {
  all: [
    prependSlash()
  ],
  find: [
    auth.verifyOrRestrict(restriction),
    auth.populateOrRestrict(restriction),
    globalHooks.isEnabled(),
    globalHooks.hasPermissionOrRestrict(permissionName, restriction)
  ],
  get: [
    auth.verifyOrRestrict(restriction),
    auth.populateOrRestrict(restriction),
    globalHooks.isEnabled(),
    globalHooks.hasPermissionOrRestrict(permissionName, restriction)
  ],
  create: [
    isApproved(),
    areCommentsPermitted(),
    recaptcha()
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName)
  ],
  patch: [
    globalHooks.allowUpsert(),
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName)
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    globalHooks.isEnabled(),
    globalHooks.hasPermission(permissionName)
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
