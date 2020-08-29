const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

//Get a list of all products
router.get('/', UserController.getAllUsers);

//Create a new product
router.post('/', UserController.createNewUser);

//Get a product by id
router.get('/:id', UserController.findUserById);

//Update a product by id
router.patch('/:id', UserController.updateAnUser);

//Delete a product by id
router.delete('/:id', UserController.deleteAnUser);

module.exports = router;