const express = require('express')
const usersRouter = require('./routes/usersRouter')
const tasksRouter = require('./routes/tasksRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)

app.all('*', (req, res) => {
  res.status(400).json({message: "This endpoint doesn't exist"})
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
