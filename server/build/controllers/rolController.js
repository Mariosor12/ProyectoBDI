const rolCtrl = {};
const pool = require('../database/database');

rolCtrl.getRoles = async (req,res) => {
    await pool.query("SELECT clave, nombre FROM IMA_rol")
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

rolCtrl.getRol = async (req,res) => {
    const id = req.params.id;
    await pool.query("SELECT clave, nombre FROM IMA_Rol WHERE clave = "+id)
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

rolCtrl.createRol = async (req,res) => {
    const rol = req.body;
    await pool.query("INSERT INTO IMA_rol (nombre) VALUES ('"+rol.nombre+"')")
        .then(response => {
            if(response.rowCount)
                res.json('Rol Insertado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

rolCtrl.editRol = async (req,res) => {
    const id = req.params.id;
    const rol = req.body;
    await pool.query("UPDATE IMA_rol SET nombre = '"+rol.nombre+"' WHERE clave = "+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Actualizado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

rolCtrl.deleteRol = async (req,res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM IMA_rol WHERE clave ="+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Eliminado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};



module.exports = rolCtrl;