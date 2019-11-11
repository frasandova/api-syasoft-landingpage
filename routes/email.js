//Requires

// require('./config.js');

// require('../config.js');

var express = require('express');
var Usuario = require('../models/usuario');
var app = express();


var fs = require('fs');
var path = require('path');


// var helper = require('sendgrid').mail;
// var fromEmail = new helper.Email('contacto.syasoft@gmail.com');
// var toEmail = new helper.Email('contacto.syasoft@gmail.com');
// var subject = 'Contacto SYASOFT desde landing page';
// var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
// var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
// var mail = new helper.Mail(fromEmail, subject, toEmail, content);
 
// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

 
//  var sg = require('sendgrid')('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');

// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });
 

//============================================
//Obtener todos los usuarios
//============================================

// app.put('/:tipo/:id',(req, res, next)=>{

//   var tipo = req.params.tipo;
//   var id = req.params.id;

app.get('/send/:nombre/:email/:descripcion',(req, res, next)=>{

  // console.log('process.env.SENDGRID_API_KEY',process.env.SENDGRID_API_KEY);
  // console.log('process.env.FROM_EMAIL',process.env.FROM_EMAIL);
  // console.log('process.env.TO_EMAIL',process.env.TO_EMAIL);
  // var nombre = req.query.nombre || 'nombre';
  // var email = req.query.email || 'email';
  // var descripcion = req.query.descripcion || 'descripcion';


  var nombre = req.params.nombre || 'nombre';
  var email = req.params.email || 'email';
  var descripcion = req.params.descripcion || 'descripcion';

  console.log('nombre',nombre);
  console.log('email',email);
  console.log('descripcion',descripcion);

   sendEmail(nombre,email,descripcion);
    // sg.API(request, function (error, response) {
    //     if (error) {
    //       console.log('Error: ' + error);
    //     }
    //     console.log(response.statusCode);
    //     console.log(response.body);
    //     console.log(response.headers);
    //   });
    
    res.status(200).json({
        ok:true,
        mensaje:'Envio de correo realizado de forma correcta SENDGRID'
    });
});


function sendEmail(nombre,email,descripcion){

  
  var filePath = path.resolve(__dirname,`../templates/template_email.html`);    
  var filePath2 = path.resolve(__dirname,`../templates/template_email2.html`);

  // console.log('filePath1', filePath);
  // console.log('filePath2', filePath2);

  
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    var result = data.replace("{nombre}", nombre);
    //console.log('result',result);
    result = result.replace("{email}", email);
    // console.log('result',result);
    result = result.replace("{descripcion}", descripcion);
    //  console.log('result',result);

    // var result = fileAsString.replace(/string to be replaced/g, 'replacement');

    fs.writeFile(filePath2, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });

fs.readFile(filePath2, {encoding: 'utf-8'}, function(err, dataFileHtml) {
    if ( ! err ) {    
      


      var helper = require('sendgrid').mail;
      //  var fromEmail = new helper.Email(process.env.FROM_EMAIL);
      //  var toEmail = new helper.Email(process.env.TO_EMAIL);

      
      // var fromEmail = new helper.Email('frasandova@gmail.com');
      // var toEmail = new helper.Email('frasandova@gmail.com');

      var fromEmail = new helper.Email('contacto.syasoft@gmail.com');
      var toEmail = new helper.Email('contacto.syasoft@gmail.com');


      subject = "CONTACTO SYASOFT DESDE LANDING PAGE";
      content = new helper.Content("text/html", dataFileHtml);
      mail = new helper.Mail(fromEmail, subject, toEmail, content);
   
      
      //var sg = require('sendgrid')('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');
      //var sg = require('sendgrid')('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');
      
      var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

      var requestBody = mail.toJSON();
      var request = sg.emptyRequest();
      request.method = 'POST';
      request.path = '/v3/mail/send';
      request.body = requestBody;
      sg.API(request, function (error, response) {
        if ( ! error ) {
          console.log('response.statusCode', response.statusCode);
          console.log('response.body', response.body);
          console.log('response.headers', response.headers);
        } else {
          console.log('Error',error);
        }
      });
    } else {
        console.log(err);
    }
});



}


module.exports= app;