var mongoose = require('mongoose');

var LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano: Number,
  isbn: Number
});

module.exports = mongoose.model('Livro', LivroSchema);
