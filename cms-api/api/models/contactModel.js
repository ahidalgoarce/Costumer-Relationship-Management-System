'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },

});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;