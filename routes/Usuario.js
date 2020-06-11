const express = require('express');
const app = express();

const UserController = require('../controllers/UserController');

app.post('/usuario/crear', [], UserController.addUser);

app.put('/usuario/actualizar', [], UserController.updUser);

app.put('/usuario/eliminar', [], UserController.dltUser);

module.exports = app;
