const mysql_con = require('../Configuration/mysql-config');

const ListarGatos = () => {
  return new Promise((result, reject) => {
    mysql_con.query('call usp_listar_gatos()', (err, GatosListados) => {
      if (err) reject();
      result(GatosListados);
    });
  });
};

const ListarGatoPorId = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_listar_gato_por_id(?)',
      [idGato],
      (err, GatosListados) => {
        if (err) reject();
        result(GatosListados);
      }
    );
  });
};

const ListarGatosPorRaza = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_listar_gatos_por_raza(?)',
      [raza],
      (err, GatosListados) => {
        if (err) reject();
        result(GatosListados);
      }
    );
  });
};

module.exports = { ListarGatos, ListarGatoPorId, ListarGatosPorRaza };
