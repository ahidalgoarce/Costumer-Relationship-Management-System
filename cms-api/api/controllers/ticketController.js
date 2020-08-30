const createError = require('http-errors');
const mongoose = require('mongoose');

const Ticket = require('../models/ticketModel');

module.exports = {

  getAllTickets: async (req, res, next) => {
    try {
      const results = await Ticket.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewTicket: async (req, res, next) => {
    try {
      const ticket = new Ticket(req.body);
      const result = await ticket.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findTicketById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const ticket = await Ticket.findById(id);
      if (!ticket) {
        throw createError(404, 'Ticket does not exist.');
      }
      res.send(ticket);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Ticket id'));
        return;
      }
      next(error);
    }
  },

  updateATicket: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Ticket.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Ticket does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Ticket Id'));
      }

      next(error);
    }
  },

  deleteATicket: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Ticket.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Ticket does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Ticket id'));
        return;
      }
      next(error);
    }
  }
};