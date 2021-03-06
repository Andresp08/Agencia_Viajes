//importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({path: 'variables.env'})

db.authenticate()
    .then(()=>console.log('DB conected'))
    .catch(error => console.log(error));

//configurar express
const app = express();

//validar si estamos en desarrollo o produccion
const config  = configs[app.get('env')];

//creamos la variable para el sitio web (viene de la carpeta config)
app.locals.titulo = config.nombreSitio;

//habilitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar carpeta estatica llamada public
app.use(express.static('public'));

//Muestra el año actual y la ruta
app.use((req, res, next)=>{
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    //console.log(res.locals);
    return next();
})

//ejecutar el bodyparser
app.use(bodyParser.urlencoded({extended:true}));

//cargar las rutas
app.use('/', routes());

/*Puerto y host para la app*/
//configurar express
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('el servidor está funcionando');
});