const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const tasksController = require('../controllers/tasksController')

router.get('/users', usersController.getUsersAPI)

router.get('/users/:id', usersController.getUserAPI)

router.get('/tasks/:id', tasksController.getTaskAPI)

router.get('/tasks', (req, res) => {
  toBeBuilt(res)
})

router.post(['/tasks', '/users'], (req, res) => {
  toBeBuilt(res)
})

router.patch(['/tasks/:id', '/users/:id'], (req, res) => {
  toBeBuilt(res)
})

router.put(['/tasks/:id', '/users/:id'], (req, res) => {
  toBeBuilt(res)
})

router.delete(['/tasks/:id', '/users/:id'], (req, res) => {
  toBeBuilt(res)
})

router.all('*', (req, res) => {
  res.status(400).json({message: "This endpoint doesn't exist"})
})

function toBeBuilt(res){
  res.status(200).json({message: "This route has not been built out yet. But you know how it's supposed to work"})
}

module.exports = router