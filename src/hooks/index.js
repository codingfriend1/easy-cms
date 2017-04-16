// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

exports.setFirstUserToRole = require('./set-first-user-role')
exports.setDefaultRole = require('./set-default-role')
exports.preventDisabledAdmin = require('./prevent-disabled-admin')
exports.ownerOrRestrict = require('./owner-or-restrict')
exports.hasPermissionOrRestrict = require('./has-permission-or-restrict')
exports.hasPermission = require('./has-permission')
exports.isEnabled = require('./is-enabled')
exports.recaptcha = require('./recaptcha')
exports.isTargetEnabled = require('./is-target-enabled')
exports.remove= require('./remove-from-disk')
exports.hasPermissionOrRestrictChanges = require('./permission-or-restrict-changes')
exports.filterByPermissionOrRestrict = require('./filter-by-permission-or-restrict')
exports.updateByPermission = require('./update-by-permission')
exports.deleteCustomData = require('./delete-custom-data')
exports.sendVerificationEmail = require('./send-verification-email')
exports.allowUpsert = require('./allow-upsert')