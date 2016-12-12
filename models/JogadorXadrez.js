var mongoose = require('mongoose');

var JogadorXadrezSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  pais: String,
  rating: Number
});

module.exports = mongoose.model('JogadorXadrez', JogadorXadrezSchema);
