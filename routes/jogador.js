var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var JogadorXadrez = require('../models/JogadorXadrez.js');

/* GET /jogadorXadrez Listagem de usuários. */
router.get('/', function(req, res, next) {
  JogadorXadrez.find(function (err, jogadorXadrez) {
    if (err) return next(err);
    res.json(jogadorXadrez);
  });
});

/* POST /jogadorXadrez Cadastro de usuário */
router.post('/', function(req, res, next) {
  JogadorXadrez.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /jogadorXadrez/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  JogadorXadrez.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /jogadorXadrez/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  JogadorXadrez.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /jogadorXadrez/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  JogadorXadrez.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
