'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: false,
  },
  state: {
    type: String,
    enum: ['Abierto', 'En Proceso', 'En Espera', 'Finalizado'],
    required: true,
  },

});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;