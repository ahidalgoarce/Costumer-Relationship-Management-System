const express = require('express');
const router = express.Router();

const ClientController = require('../controllers/clientController');

//Get a list of all products
router.get('/', ClientController.getAllClients);

//Create a new product
router.post('/', ClientController.createNewClient);

//Get a product by id
router.get('/:id', ClientController.findClientById);

//Update a product by id
router.patch('/:id', ClientController.updateAClient);

//Delete a product by id
router.delete('/:id', ClientController.deleteAClient);

module.exports = router;