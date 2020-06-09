const mysql_con = require('../Configuration/mysql-config');

const CrearAdopcion = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_crear_adopcion(?,?,?,?,?,?)',
      [
        IdUsuario,
        IdGato,
        Fecha_adopcion,
        DNI,
        direccion_referencia,
        numero_contacto,
      ],
      (err, AdopcionCreada) => {
        if (err) reject();
        result(AdopcionCreada);
      }
    );
  });
};

module.exports = {
  CrearAdopcion,
};
