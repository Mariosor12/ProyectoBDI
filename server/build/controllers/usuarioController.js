const usuarioCtrl = {};
const pool  = require('../database/database');

usuarioCtrl.getUsuarios = async (req, res) => {
    await pool.query("SELECT clave as id, nombre, contrasena FROM usuario;")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

usuarioCtrl.getoneUsuario = async (req, res) => {
    const id = req.params.id;
    await pool.query("select clave as id, nombre, contraseña as contrasena from usuario where clave = "+id+";")
        .then(response => {
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = req.body;
    await pool.query("INSERT INTO usuario (nombre, contrasena) VALUES ('"+usuario.nombre+"', '"+usuario.contrasena+"');")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

usuarioCtrl.editUsuario = async (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    await pool.query("UPDATE Usuario SET nombre = '"+usuario.nombre+"',  contrasena = '"+usuario.contrasena+"' WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

usuarioCtrl.deleteUsuario = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM Usuario WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = usuarioCtrl;
