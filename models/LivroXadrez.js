var mongoose = require('mongoose');

var LivroXadrezSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano: Number,
  paginas: Number,
  isbn: Number,
  categoria: String
});

module.exports = mongoose.model('LivroXadrez', LivroXadrezSchema);
