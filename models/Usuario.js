const mysql_con = require('../Configuration/mysql-config');

const CrearUsuario = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_crear_usuario(?,?,?,?,?,?,?)'[
        (Nombre_completo,
        Direccion,
        Distrito,
        Fecha_Nacimiento,
        Foto,
        correo,
        contrasenia)
      ],
      (err, UsuarioCreado) => {
        if (err) reject();
        result(UsuarioCreado);
      }
    );
  });
};

const ActualizarUsuario = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_actualizar_usuario(?,?,?,?,?,?)',
      [
        IdUsuarios,
        Nombre_completo,
        Direccion,
        Distrito,
        Fecha_Nacimiento,
        Foto,
      ],
      (err, UsuarioActualizado) => {
        if (err) reject();
        result(UsuarioActualizado);
      }
    );
  });
};

const EliminarUsuario = () => {
  return new Promise((result, reject) => {
    mysql_con.query(
      'call usp_eliminar_usuario(?)',
      [idUsuario],
      (err, UsuarioEliminado) => {
        if (err) reject();
        result(UsuarioEliminado);
      }
    );
  });
};

module.exports = {
  CrearUsuario,
  ActualizarUsuario,
  EliminarUsuario,
};
