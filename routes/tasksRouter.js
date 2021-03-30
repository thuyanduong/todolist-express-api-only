const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')

router.get('/:id/edit', tasksController.editView)

router.get('/:id', tasksController.getTaskView)

router.get('/', tasksController.toBeBuilt)

router.post('/', tasksController.toBeBuilt)

router.patch('/:id', tasksController.toBeBuilt)

router.put('/:id', tasksController.toBeBuilt)

router.delete('/:id', tasksController.toBeBuilt)

module.exports = router