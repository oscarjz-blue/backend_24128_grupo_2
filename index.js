// declaracion de constantes
const express = require('express')
const app = express()
// constantes adicionales
const path = require('path')
const morgan = require('morgan')

//const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersRouterTest = require('./routes/usersTest')
const usersRouter = require('./routes/users')
const moviesRouter = require('./routes/movies')

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//app.use(express.json())

// routes
app.use('/movies', moviesRouter)
app.use('/test', usersRouterTest)
app.use(usersRouter)

// static files
app.use(express.json())
app.use(express.static(path.join(__dirname, "./public")));

// Servir archivos estáticos de la carpeta uploads
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
