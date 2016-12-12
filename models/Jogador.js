var mongoose = require('mongoose');

var JogadorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  pais: String,
  rating: Number
});

module.exports = mongoose.model('Jogador', JogadorSchema);
