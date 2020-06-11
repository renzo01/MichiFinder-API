const Gato = require('../models/Gato');

const getAllCats = async (req, res) => {
  const result = await Gato.ListarGatos();

  if (!result) {
    return res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }

  res.json({
    ok: true,
    gatos: result[0],
  });
};

const getCatsByRace = async (req, res) => {
  const body = req.body;

  const { race } = body;

  const result = await Gato.ListarGatosPorRaza(race);

  if (!result) {
    return res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }

  res.json({
    ok: true,
    gatos: result[0],
  });
};

const getCatsById = async (req, res) => {
  const body = req.body;

  const { catId } = body;

  const result = await Gato.ListarGatoPorId(catId);
  if (!result) {
    return res.status(500).json({
      ok: false,
      mensaje: 'No se pudo mostrar ningun gato',
    });
  }

  res.json({
    ok: true,
    gatos: result[0],
  });
};

module.exports = {
  getAllCats,
  getCatsByRace,
  getCatsById,
};
