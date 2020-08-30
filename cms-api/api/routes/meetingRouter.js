const express = require('express');
const router = express.Router();

const MeetingController = require('../controllers/meetingController');

router.get('/', MeetingController.getAllMeetings);

router.post('/', MeetingController.createNewMeeting);

router.get('/:id', MeetingController.findMeetingById);

router.patch('/:id', MeetingController.updateAMeeting);

router.delete('/:id', MeetingController.deleteAMeeting);

module.exports = router;