import express from 'express'
import morgan from 'morgan';
import {engine} from 'express-handlebars';
import {join, dirname} from 'path' //importo funciones que voy a necesitar para views
import { fileURLToPath } from 'url';
import personasRoutes from './routes/personas.routes.js'

// Inicializacion  
const app = express(); //permite correr mi servidor
const __dirname = dirname(fileURLToPath(import.meta.url));

// Setting  para armar mi configuracion 
// si la variable de entorno no existe abrir en el puerto 3000    
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views')); //configuracion que almacenara las vistas
app.engine('.hbs', engine({
    defaultlayout:'main', //archivo principal que estara leyendo
    layoutsDir: join(app.get('views'),'layouts'), // serian los directorios donde se encuentran  c/u de los layouts
    partialsDir: join(app.get('views'),'partials'),// especificar en donde estan los partials
    extname: '.hbs' // especificar la extension de mi motor de plantilla 
})); 
//tambien se configura las funciones engine

app.set('view engine', '.hbs');

// Middlewares  
app.use(morgan('dev')); // sirve para ver todas las peticiones http que llegan a nuestro servidor, paso como parametro dev el script de incio declarado en json
app.use(express.urlencoded({extended:false})); //porque voy a trabajar con interfaces y formularios
app.use(express.json()); //para trabajar con archivos del tipo json

// Routes
app.get('/', (req,res)=>{        //ruta inicial 
    res.render('index') //
})
app.use(personasRoutes); // para configurar las rutas dentro de personas primero es necesario importarlo arriba

// Public File

app.use(express.static(join(__dirname, '/public')));  // para unir los directorios y concatenar con mi carpeta public

//Run Server 
app.listen(app.get('port'),()=>
console.log('Server listening on port', app.get('port')));
