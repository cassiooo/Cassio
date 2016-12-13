var mongoose = require('mongoose');

var LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano: Number,
  paginas: Number,
  isbn: Number,
  categoria: String
});

module.exports = mongoose.model('Livro', LivroSchema);
