// Requires
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var rolesValidos ={
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};



//Definir Esquemas
var Schema = mongoose.Schema;

//Definir Modelo
var usuarioSchema = new Schema({
    nombre:{type: String, required: [true, 'El nombre es necesario'] },
    email:{type: String, unique:true, required: [true, 'El correo es necesario'] },
    password:{type: String, required: [true, 'La contraseña es necesaria'] },
    img:{type: String, required: false },
    role:{type: String, required: true, default:'USER_ROLE', enum : rolesValidos }
});

usuarioSchema.plugin( uniqueValidator, {message: '{PATH} debe de ser único'})

module.exports = mongoose.model('Usuario', usuarioSchema);