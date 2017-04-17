'use strict';

const service = require('feathers-mongoose');
const models = require('../../schemas').models
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: models.comments,
    lean: true,
    paginate: {
      default: 30
    }
  };

  // Initialize our service with any options it requires
  app.use('/comments', service(options));

  // Get our initialize service to that we can bind hooks
  const commentsService = app.service('/comments');

  // Set up our before hooks
  commentsService.before(hooks.before);

  // Set up our after hooks
  commentsService.after(hooks.after);
};
