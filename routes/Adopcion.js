'use strict';
const express = require('express');
const app = express();

const Adopcion = require('../models/Adopcion');

app.post('/adopcion/crear', async (req, res) => {
  let body = req.body;
  const result = await Adopcion.CrearAdopcion(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'No se obtuvieron los datos',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah adoptado con exito',
  });
});

module.exports = app;
