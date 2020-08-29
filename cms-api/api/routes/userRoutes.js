const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * path:
 *  /user:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of users
 *        "400":
 *          description: An error has ocurred
 *        "500":
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 */
router.get('/', UserController.getAllUsers);

/**
 * @swagger
 * path:
 *  /user:
 *    post:
 *      summary: Create a new user
 *      parameters:
 *        - in: body
 *          name: name
 *          schema:
 *            type: string
 *            required: true
 *        - in: body
 *          name: lastname
 *          schema:
 *            type: string
 *            required: true
 *        - in: body
 *          name: username
 *          schema:
 *            type: string
 *            required: true
 *        - in: body
 *          name: password
 *          schema:
 *            type: string
 *            required: true
 *        - in: body
 *          name: isAdmin
 *          schema:
 *            type: boolean
 *            required: true
 *            enum: [true, false]
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *      responses:
 *        "200":
 *          description: User created successfuly
 *          content:
 *            application/json:
 *              schema:
 */
router.post('/', UserController.createNewUser);

//Get a product by id
router.get('/:id', UserController.findUserById);

//Update a product by id
router.patch('/:id', UserController.updateAnUser);

//Delete a product by id
router.delete('/:id', UserController.deleteAnUser);

module.exports = router;