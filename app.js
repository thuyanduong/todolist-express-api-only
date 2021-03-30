const express = require('express')
const methodOverride = require('method-override')
const usersRouter = require('./routes/usersRouter')
const tasksRouter = require('./routes/tasksRouter')
const apiRouter = require('./routes/apiRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.redirect('/users')
})

app.use('/users', usersRouter)
app.use('/tasks', tasksRouter)
app.use('/api', apiRouter)

app.get('*', (req, res) => {
  res.render('info', {title: '404', message: "404 Not Found"})
})

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
