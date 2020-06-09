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
  res.json({});
});

module.exports = app;
