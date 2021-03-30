const User = require('../models/User')

const getUsers = async () => {
    return await User.getUsers()
}

const getUsersAPI = async (req, res) => {
  try {
    const users = await getUsers()
    res.status(200).json(users)
  } catch {
    res.sendStatus(500);
  }
}

const getUsersView = async (req, res) => {
  try {
    const users = await getUsers()
    res.status(200).render('users', {title: 'To Do Lists', users: users})
  } catch {
    res.sendStatus(500);
  }
}

const getUser = async (id) => {
  const user = await User.getUser(id)
  const usersTasks = await User.getUsersTask(id)
  return {user, usersTasks}
}

const getUserAPI = async (req, res) => {
  const id = req.params.id
  try {
    let {user, usersTasks} = await getUser(id)
    if(user){
      user.tasks = usersTasks
      res.status(200).json(user)
    } else {
      res.status(404).json({message: "User not found"})
    }
  } catch {
    res.sendStatus(500);
  }
}

const getUserView = async (req, res) => {
  const id = req.params.id
  try {
    let {user, usersTasks} = await getUser(id)
    if(user){
      user.tasks = usersTasks
      res.status(200).render('user', {title: `${user.name}'s To Do List`, user})
    } else {
      res.status(404).render('info', {title: "404", message: "User Not Found"})
    }
  } catch {
    res.sendStatus(500);
  }
}

const addTaskView = (req, res) => {
  res.status(404).render('newTask', {title: "Add a Task"})
}

const toBeBuilt = (req, res) => {
  res.status(200).render('info', {title: "Work in Progress", message: "This feature has not been built out yet. But you know how it's supposed to work"})
}

module.exports = {
  getUsersAPI,
  getUsersView,
  getUserAPI,
  getUserView,
  toBeBuilt,
  addTaskView
}