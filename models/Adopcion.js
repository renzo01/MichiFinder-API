const mysql_con = require('../Configuration/mysql-config');

const CrearAdopcion = (adoption) => {
  const {
    IdUsuario,
    IdGato,
    Fecha_Adopcion,
    DNI,
    direccion_referencia,
    numero_contacto,
  } = adoption;
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_crear_adopcion(?,?,?,?,?,?)',
      [
        IdUsuario,
        IdGato,
        Fecha_Adopcion,
        DNI,
        direccion_referencia,
        numero_contacto,
      ],
      (err, AdopcionCreada) => {
        console.log(err);
        console.log(AdopcionCreada);
        if (err) reject();
        result(AdopcionCreada);
      }
    );
  });
};

const ListarAdopcion = (adoption) => {
  const { IdUsuarios } = adoption;
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_listado_adopciones_por_usuario(?)',
      [IdUsuarios],
      (err, ListadoAdopcion) => {
        console.log(err);
        console.log(ListadoAdopcion);
        if (err) reject();
        result(ListadoAdopcion);
      }
    );
  });
};

module.exports = {
  CrearAdopcion,
  ListarAdopcion,
};
