'use strict';
const express = require('express');
const app = express();

const Adopcion = require('../models/Adopcion');
const AdoptionController = require('../controllers/AdoptionController');

app.post('/adopcion/crear', [], AdoptionController.crtAdoption);
app.post('/adopcion/listar', [], AdoptionController.lstAdoption);
module.exports = app;
