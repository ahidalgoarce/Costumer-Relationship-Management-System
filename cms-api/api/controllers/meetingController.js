const createError = require('http-errors');
const mongoose = require('mongoose');

const Meeting = require('../models/meetingModel');

module.exports = {

  getAllMeetings: async (req, res, next) => {
    try {
      const results = await Meeting.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewMeeting: async (req, res, next) => {
    try {
      const meeting = new Meeting(req.body);
      const result = await meeting.save();
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

  findMeetingById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const meeting = await Meeting.findById(id);
      if (!meeting) {
        throw createError(404, 'Meeting does not exist.');
      }
      res.send(meeting);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Meeting id'));
        return;
      }
      next(error);
    }
  },

  updateAMeeting: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Meeting.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Meeting does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Meeting Id'));
      }

      next(error);
    }
  },

  deleteAMeeting: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Meeting.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Meeting does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Meeting id'));
        return;
      }
      next(error);
    }
  }
};