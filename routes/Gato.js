'use strict';
const express = require('express');
const app = express();

const CatController = require('../controllers/CatController');

app.get('/gato/listar', [], CatController.getAllCats);

app.get('/gato/listar/raza', [], CatController.getCatsByRace);

app.get('/gato/listar/id', [], CatController.getCatsById);

module.exports = app;
