const express = require('express');
const router = express.Router();

const TicketController = require('../controllers/ticketController');

router.get('/', TicketController.getAllTickets);

router.post('/', TicketController.createNewTicket);

router.get('/:id', TicketController.findTicketById);

router.patch('/:id', TicketController.updateATicket);

router.delete('/:id', TicketController.deleteATicket);

module.exports = router;