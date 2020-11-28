const express = require('express');
const userController = require('./controllers/userController');
const routes = express.Router();

// Creating routes
routes.get('/users', userController.index);
routes.post('/users/', userController.create);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;