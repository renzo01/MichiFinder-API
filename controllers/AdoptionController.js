const Adopcion = require('../models/Adopcion');

const crtAdoption = async (req, res) => {
  let body = req.body;
  console.log(body);
  const result = await Adopcion.CrearAdopcion(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Nose pudo hacer la adopcion.',
    });
  }
  res.json({
    ok: true,
    mensaje: 'Se ah Adoptado al gatito satisfactoriamente',
  });
};

const lstAdoption = async (req, res) => {
  let body = req.body;
  const result = await Adopcion.ListarAdopcion(body);
  if (!result) {
    res.status(500).json({
      ok: false,
      mensaje: 'Nose pudo hacer la adopcion.',
    });
  }
  res.json({
    adopciones: result[0],
  });
};

module.exports = {
  crtAdoption,
  lstAdoption,
};
