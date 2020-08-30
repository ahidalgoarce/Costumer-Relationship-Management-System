const express = require('express');
const router = express.Router();

const ContactController = require('../controllers/contactController');

router.get('/', ContactController.getAllContacts);

router.post('/', ContactController.createNewContact);

router.get('/:id', ContactController.findContactById);

router.patch('/:id', ContactController.updateAContact);

router.delete('/:id', ContactController.deleteAContact);

module.exports = router;