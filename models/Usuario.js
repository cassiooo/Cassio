var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  perfil:{
  	 nome:String
  },
  endereco:String,
  cep:Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
