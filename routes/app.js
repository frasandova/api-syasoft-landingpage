//Requires
var express = require('express');
var app = express();



app.get('/',(req, res, next)=>{


    res.status(403).json({
        ok:true,
        mensaje:'Peticion realizada correctamente MAILGUN'
    });
});

module.exports= app;