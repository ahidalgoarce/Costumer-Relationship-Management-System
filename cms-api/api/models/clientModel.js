'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
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

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;