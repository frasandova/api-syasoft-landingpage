//Requires
var express = require('express');
var Usuario = require('../models/usuario');
var app = express();

var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('frasandova@gmail.com');
var toEmail = new helper.Email('frasandova@gmail.com');
var subject = 'Sending with SendGrid is Fun';
var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

 
 var sg = require('sendgrid')('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');

var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
});
 

//============================================
//Obtener todos los usuarios
//============================================
app.get('/send',(req, res, next)=>{

    sg.API(request, function (error, response) {
        if (error) {
          console.log('Error: ' + error);
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
      });
    
    res.status(200).json({
        ok:true,
        mensaje:'Envio de correo realizado de forma correcta SENDGRID'
    });
});


module.exports= app;