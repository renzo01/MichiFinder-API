'use strict';
const express = require('express');
const app = express();

const Adopcion = require('../models/Adopcion');
const AdoptionController = require('../controllers/AdoptionController');

app.post('/adopcion/crear', [], AdoptionController.crtAdoption);

module.exports = app;
