'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');

  app.route('/user')
    .get(user.list_all_users)
    .post(user.create_an_user);


  app.route('/user/:userId')
    .get(user.read_an_user)
    .put(user.update_an_user)
    .delete(user.delete_an_user);
};