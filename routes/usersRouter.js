const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/:id/tasks/new', usersController.addTaskView)

router.get('/:id', usersController.getUserView)

router.get('/', usersController.getUsersView)

router.post('/', usersController.toBeBuilt)

router.patch('/:id', usersController.toBeBuilt)

router.put('/:id', usersController.toBeBuilt)

router.delete('/:id', usersController.toBeBuilt)

module.exports = router
