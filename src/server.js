const express = require('express')
const app = express()
//const moviesRouter = require('../routes/movies')
const usersRouterTest = require('../routes/usersTest')

app.use(express.json())

//app.use('/movies', moviesRouter)
app.use('/test', usersRouterTest)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
