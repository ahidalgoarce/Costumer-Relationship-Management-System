'use strict';
module.exports = function(app) {
  var contact = require('../controllers/contactController');

  app.route('/contact')
    .get(contact.list_all_contacts)
    .post(contact.create_a_contact);


  app.route('/contact/:contactId')
    .get(contact.read_a_contact)
    .put(contact.update_a_contact)
    .delete(contact.delete_a_contact);
};