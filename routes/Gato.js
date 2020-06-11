'use strict';
const express = require('express');
const app = express();

const Gato = require('../models/Gato');

app.get('/gato/listar', async (req, res) => {
  const result = await Gato.ListarGatos();
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }
  res.json({
    ok: true,
    gatos: result,
  });
});

app.get('/gato/listar/raza', async (req, res) => {
  let body = req.body;
  const result = await Gato.ListarGatosPorRaza(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }
  res.json({
    ok: true,
    gatos: result,
  });
});

app.get('/gato/listar/id', async (req, res) => {
  let body = req.body;
  const result = await Gato.ListarGatoPorId(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }
  res.json({
    ok: true,
    gatos: result,
  });
});

module.exports = app;
