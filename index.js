const express = require('express')
const app = express();
const moviesRouter = require('./routes/movies')
const path = require('path')


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/movies', moviesRouter);

// Servir archivos estáticos de la carpeta uploads
app.use('/uploads', express.static('uploads'));

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})