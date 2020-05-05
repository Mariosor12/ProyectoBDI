const clCtrl = {};
const pool = require('../database/database');

clCtrl.getClientes = async (req,res) => {
    await pool.query("select id, fk_direccion as lugar, ci, nombre, apellido, genero, telefono from cliente")
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
}

clCtrl.getCliente = async (req,res) => {
    const id = req.params.id;
    await pool.query("select id, fk_direccion as lugar, ci, nombre, apellido, genero, telefono from cliente WHERE id = "+id)
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
}

clCtrl.createCliente = async (req,res) => {
    const cli = req.body;
    await pool.query("INSERT INTO cliente (fk_direccion, ci, nombre, apellido, genero, telefono) VALUES ("+cli.lugar+",'"+cli.ci+"','"+cli.nombre+"', '"+cli.apellido+"', '"+cli.genero+"', "+cli.telefono+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

clCtrl.editCliente = async (req,res) => {
    const id = req.params.id;
    const cli = req.body;
    await pool.query("UPDATE cliente SET fk_direccion = "+cli.lugar+", ci = '"+cli.ci+"', nombre = '"+cli.nombre+"', apellido = '"+cli.apellido+"', genero = '"+cli.genero+"', telefono = "+cli.telefono+" WHERE id ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

clCtrl.deleteCliente = async (req,res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM cliente WHERE id = "+id)
        .then(response => {
            res.json('Cliente eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

module.exports = clCtrl;