const express = require('express');
const app = express();
const { midMulter } = require('../middlewares/ImageMiddleware');

const UserController = require('../controllers/UserController');

app.post('/usuario/crear', [midMulter], UserController.addUser);

app.put('/usuario/actualizar', [midMulter], UserController.updUser);

app.put('/usuario/eliminar', [], UserController.dltUser);

app.post('/usuario/login', UserController.loginUser);

module.exports = app;
