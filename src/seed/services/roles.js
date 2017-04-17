const basic = {
  role: 'basic',
  permissions: []
}

const level1 = {
  role: 'level 1',
  permissions: [
    'editContent',
  ]
}

const level2 = {
  role: 'level 2',
  permissions: [
    'editContent',
    'publishContent',
    'manageMedia',
  ]
}

const level3 = {
  role: 'level 3',
  permissions: [
    'editContent',
    'publishContent',
    'deleteContent',
    'manageMedia',
    'manageExtensions',
    'moderateComments'
  ]
}

const level4 = {
  role: 'level 4',
  permissions: [
    'editContent',
    'publishContent',
    'deleteContent',
    'manageMedia',
    'manageExtensions',
    'moderateComments',
    'manageUsers',
    'manageRoles',
    'viewAnalytics',
  ]
}

const level5 = {
  role: 'level 5',
  permissions: [
    'editContent',
    'publishContent',
    'deleteContent',
    'manageMedia',
    'manageExtensions',
    'moderateComments',
    'manageUsers',
    'manageRoles',
    'manageSettings',
    'importExportData',
    'viewAnalytics',
  ]
}

const admin = {
  role: 'admin',
  permissions: [
    'editContent',
    'publishContent',
    'deleteContent',
    'manageMedia',
    'manageExtensions',
    'moderateComments',
    'manageUsers',
    'manageRoles',
    'manageSettings',
    'importExportData',
    'viewAnalytics'
  ]
}

const demo = {
  role: 'demo',
  permissions: [
    'editContent',
    'deleteContent',
    'manageMedia',
    'moderateComments',
    'receiveEmails'
  ]
}

module.exports = [
  basic, 
  level1, 
  level2, 
  level3, 
  level4, 
  level5, 
  admin, 
  demo
]
