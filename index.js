// declaracion de constantes
const express = require('express')
const app = express()
// constantes adicionales
const path = require('path')
const morgan = require('morgan')
const expressHbs = require('express-handlebars')

//const __dirname = path.dirname(fileURLToPath(import.meta.url));
const usersRouterTest = require('./routes/usersTest.js')
const usersRouter = require('./routes/users.js')
const moviesRouter = require('./routes/movies.js')
const personasRoutes = require('./routes/personas.routes.js')

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//app.set('views', join(__dirname, './views')); //configuracion que almacenara las vistas
app.engine('.hbs', expressHbs.engine({
    defaultlayout:'main', //archivo principal que estara leyendo
    layoutsDir: path.join(app.get('views'),'layouts'), // serian los directorios donde se encuentran  c/u de los layouts
    partialsDir: path.join(app.get('views'),'partials'),// especificar en donde estan los partials
    extname: '.hbs' // especificar la extension de mi motor de plantilla 
})); 
//tambien se configura las funciones engine

app.set('view engine', '.hbs');


// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//app.use(express.json())

// Routes - Leo
app.get('/', (req,res)=>{        //ruta inicial para hbs
    res.render('index.hbs') //
})

// routes
app.use('/movies', moviesRouter)
app.use('/test', usersRouterTest)
app.use(usersRouter)
app.use(personasRoutes); // para configurar las rutas dentro de personas primero es necesario importarlo arriba

// static files
app.use(express.json())
app.use(express.static(path.join(__dirname, "./public")));

// Servir archivos estáticos de la carpeta uploads
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
