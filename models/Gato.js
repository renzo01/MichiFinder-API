const mysql_con = require('../Configuration/mysql-config');

const ListarGatos = () => {
  return new Promise((result, reject) => {
    mysql_con.query('call usp_listar_gatos()', (err, GatosListados) => {
      if (err) reject();
      result(GatosListados);
    });
  }).catch(err => console.log(err));
};

const ListarGatoPorId = (idGato) => {
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

const ListarGatosPorRaza = (raza) => {
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
