'use strict';
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  isAdmin: {
    type: Boolean,
    required: true,
  },

});

const User = mongoose.model('User', UserSchema);
module.exports = User;

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - lastname
 *          - username
 *          - password
 *          - isAdmin
 *        properties:
 *          name:
 *            type: string
 *            required: true
 *          lastname:
 *            type: string
 *            required: true
 *          username:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *            required: true
 *          password:
 *            type: string
 *            required: true
 *          isAdmin:
 *            type: boolean
 *            required: true
 *        example:
 *           name: Alejandro
 *           lastname: Hidalgo
 *           username: ahidalgoa1310@email.com
 *           password: 123
 *           isAdmin: true
 */