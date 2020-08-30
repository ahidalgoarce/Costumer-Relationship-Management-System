'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
      type: Date,
      default: Date.now,
      required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isVirtual: {
      type: Boolean,
      required: true
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: false,
  },

});

const Meeting = mongoose.model('Meeting', MeetingSchema);
module.exports = Meeting;