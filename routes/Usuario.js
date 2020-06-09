const express = require('express');
const app = express();

const Usuario = require('../models/Usuario');

app.post('/usuario/crear', async (req, res) => {
  let body = req.body;
  const result = await Usuario.CrearUsuario(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Se tienen que colocar todos los datos',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah registrado correctamente',
  });
});

app.post('/usuario/actualizar', async (req, res) => {
  let body = req.body;
  const result = await Usuario.CrearUsuario(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Se tienen que colocar todos los datos',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah actualizado correctamente',
  });
});

app.put('/usuario/eliminar', async (req, res) => {
  let body = req.body;
  const result = await Usuario.CrearUsuario(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Se tienen que colocar el id del usuario',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah eliminado correctamente',
  });
});

module.exports = app;
