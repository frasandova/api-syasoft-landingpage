// Requires

require('./config.js');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();

//Body Parser middleware function
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB',
// mongoose.connection.openUri('mongodb+srv://syasoftadmin:jfcs4RWm5Bm3Bc4J@cluster0-0ak3v.mongodb.net/hospitalDB',
mongoose.connection.openUri(process.env.URLDB,
                    {useNewUrlParser:true, useCreateIndex:true},
                    (err, res)=>{

    if(err) throw err;
    console.log('Base de datos: \x1b[36m%s\x1b[0m', 'online');
});

// Importar Rutas
var usuarioRoutes = require('./routes/usuario');
var appRoutes = require('./routes/app');

//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// Escuchar Peticiones
app.listen(3000,()=>{
    // console.log('express Server puerto 3000 Online');
    console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');
});
