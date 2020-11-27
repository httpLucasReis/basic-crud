const express = require('express');
const userController = require('./controllers/userController');
const routes = express.Router();

// Creating routes
routes.get('/users', userController.index);

module.exports = routes;