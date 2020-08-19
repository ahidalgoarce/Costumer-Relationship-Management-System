'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  legal_certificate: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Client', ClientSchema);