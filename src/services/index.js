'use strict';
const settings = require('./settings');
const custom = require('./custom');
const comments = require('./comments');
const ban = require('./ban');
const roles = require('./roles');
const message = require('./message');
const pages = require('./pages');
const staging = require('./staging');
const authentication = require('./authentication');
const authManagement = require('./authManagement');
const user = require('./user');
const email = require('./email');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(authManagement);
  app.configure(email);
  app.configure(user);
  app.configure(message);
  app.configure(pages);
  app.configure(staging);
  app.configure(roles);
  app.configure(settings);
  app.configure(ban);
  app.configure(comments);
  app.configure(custom);
};
