const usuarioCtrl = {};
const pool  = require('../database/database');

usuarioCtrl.getUsuarios = async (req, res) => {
    await pool.query("SELECT id, nombre, contrasena FROM usuario;")
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
    await pool.query("select id, nombre, contrasena from usuario where id = "+id+";")
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
    await pool.query("UPDATE usuario SET nombre = '"+usuario.nombre+"',  contrasena = '"+usuario.contrasena+"' WHERE id = "+id+";")
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
    await pool.query("DELETE FROM usuario WHERE id = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = usuarioCtrl;
