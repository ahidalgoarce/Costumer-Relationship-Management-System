const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/clientController');

router.get('/', ClientController.getAllClients);

router.post('/', ClientController.createNewClient);

router.get('/:id', ClientController.findClientById);

router.patch('/:id', ClientController.updateAClient);

router.delete('/:id', ClientController.deleteAClient);

module.exports = router;