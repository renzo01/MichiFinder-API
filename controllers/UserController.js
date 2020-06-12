// const mysql_con = require('../Configuration/mysql-config');
const Usuario = require('../models/Usuario');

const addUser = async (req, res) => {
  let body = req.body;
  console.log(body);

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
};

const updUser = async (req, res) => {
  let body = req.body;
  const result = await Usuario.ActualizarUsuario(body);
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
};

const dltUser = async (req, res) => {
  const body = req.body;
  const { IdUsuarios } = body;

  const result = await Usuario.EliminarUsuario(IdUsuarios);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Se tienen que colocar todos los datos',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah eliminado correctamente',
  });
};

const loginUser = async (req, res) => {
  const body = req.body;
  const result = await Usuario.Login(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Se tienen que colocar todos los datos',
    });
  }
  res.json({
    ok: true,
    usuario: result[0],
  });
};
module.exports = {
  addUser,
  updUser,
  dltUser,
  loginUser,
};
