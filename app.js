const express = require('express')
const todoController = require('./controllers/todosController')
const app = express()

//setting veiw engines for embedding js
app.set('view engine', 'ejs')

//static files path
app.use(express.static('./public'))

todoController(app)

//port listener
app.listen(3000)
console.log('Listening Bro Listening at localhost-3000...')