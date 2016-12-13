var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var LivroXadrez = require('../models/LivroXadrez.js');

/* GET /livroXadrez Listagem de usuários. */
router.get('/', function(req, res, next) {
  LivroXadrez.find(function (err, livroXadrez) {
    if (err) return next(err);
    res.json(livroXadrez);
  });
});

/* POST /livroXadrez Cadastro de usuário */
router.post('/', function(req, res, next) {
  LivroXadrez.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /livroXadrez/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  LivroXadrez.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /livroXadrez/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  LivroXadrez.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /livroXadrez/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  LivroXadrez.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
