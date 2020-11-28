const express = require('express');
const userController = require('./controllers/userController');
const routes = express.Router();

// Creating routes
routes
      // User routes
      .get('/users', userController.index)
      .post('/users/', userController.create)
      .put('/users/:id', userController.update)
      .delete('/users/:id', userController.delete)
      // Projects routes

module.exports = routes;