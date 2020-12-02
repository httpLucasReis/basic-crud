const express = require('express');
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController')
const routes = express.Router();

// Creating routes
routes
      // User routes
      .get('/users', userController.index)
      .post('/users/', userController.create)
      .put('/users/:id', userController.update)
      .delete('/users/:id', userController.delete)
      // Projects routes
      .get('/projects', projectController.index)
      .post('/projects', projectController.create)
      .put('/projects/:id', projectController.update)
      .delete('/projects/:id', projectController.delete)

module.exports = routes;