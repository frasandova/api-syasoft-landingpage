//Requires
var express = require('express');
var Usuario = require('../models/usuario');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');

//var mdAutentificacion = require('../middlewares/autentificacion');

var app = express();

//============================================
//Obtener todos los usuarios
//============================================
// app.get('/',(req, res, next)=>{
//     res.status(403).json({
//         ok:true,
//         mensaje:'Peticion realizada correctamente USUARIOS'
//     });
// });

app.get('/',(req, res, next)=>{

    var desde = req.query.desde || 0;
    desde = Number(desde);
    Usuario.find({}, 'nombre email img role')
    .skip(desde)
    .limit(5)
    .exec(
        (err, usuarios)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                mensaje:'Error cargando usuario',
                errors:err
            });
        }

        Usuario.count({}, (err,conteo)=>{
            res.status(200).json({
                ok:true,
                usuarios:usuarios,
                total:conteo
            });
        })
    

    });    
});

module.exports= app;