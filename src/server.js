const express = require('express')
const app = express()
const moviesRouter = require('../routes/movies')
const usersRouter = require('../routes/users')

app.use(express.json())

app.use('/movies', moviesRouter)
app.use('/users', usersRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
