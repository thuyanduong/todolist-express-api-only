const Task = require('../models/Task')

const getTask = async (id) => {
  return Task.getTask(id)
}

const getTaskAPI = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await getTask(id);
    if(task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const getTaskView = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await getTask(id);
    if(task) {
      res.status(200).render('task', {title: task.title, task});
    } else {
      res.status(404).render('info', {title: "404", message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const editView = async (req, res) => {
  const id = req.params.id;
  try {
    let task = await getTask(id)
    if(task){
      res.status(200).render('editTask', {title: task.title, task});
    } else {
      res.status(404).render('info', {title: "404", message: "Task not found"})
    }
  } catch {
    res.sendStatus(500)
  }
}

const toBeBuilt = (req, res) => {
  res.status(200).render('info', {title: "Work in Progress", message: "This feature has not been built out yet. But you know how it's supposed to work"})
}

module.exports = {
  getTaskAPI,
  getTaskView,
  toBeBuilt,
  editView
}