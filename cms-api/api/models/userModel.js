'use strict';
var mongoose = require('mongoose');
const { isEmail } = require('validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    validate: [isEmail, 'Invalid email'],
    createIndexes: { unique: true },
  },
  password: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('User', UserSchema);