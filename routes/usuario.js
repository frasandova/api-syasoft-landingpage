//Requires
var express = require('express');
var Usuario = require('../models/usuario');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');

//var mdAutentificacion = require('../middlewares/autentificacion');

var app = express();


const mailgun = require("mailgun-js");


// const api_key = '63814692d26db4e39d58b751b7e1d713-f696beb4-a66bfe0a'
// const DOMAIN = 'sandboxe085727b425848c6aeb44f8c882e84df.mailgun.org';

const api_key = '299edaa55f50181f4986a8803164dd47-f696beb4-be15267a'
const DOMAIN = 'sandboxbd6f70b3d54844db82e61ce69ebf91fc.mailgun.org';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Francisco <frasandova@gmail.com>',
	to: 'frasandova@gmail.com',
	subject: 'Prueba Correo a Mail Gun',
	text: 'Testing some Mailgun awesomness Panchoclo!'
};

//============================================
//Obtener todos los usuarios
//============================================
app.get('/email',(req, res, next)=>{

    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
        }
        console.log(body);
    });
    
    res.status(403).json({
        ok:true,
        mensaje:'Peticion realizada correctamente USUARIOS'
    });
});

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