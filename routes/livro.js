var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Livro = require('../models/Livro.js');

/* GET /livro Listagem de usuários. */
router.get('/', function(req, res, next) {
  Livro.find(function (err, livro) {
    if (err) return next(err);
    res.json(livro);
  });
});

/* POST /livro Cadastro de usuário */
router.post('/', function(req, res, next) {
  Livro.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /livro/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Livro.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /livro/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Livro.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /livro/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Livro.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
