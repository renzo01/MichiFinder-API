'use strict';
const express = require('express');
const app = express();

const Usuario = require('./Usuario');
const Adopcion = require('./Adopcion');
const Gato = require('./Gato');

app.use(Usuario);
app.use(Adopcion);
app.use(Gato);

export default app;
