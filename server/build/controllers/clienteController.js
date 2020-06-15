const clCtrl = {};
const pool = require('../database/database');

clCtrl.getClientes = async (req,res) => {
    await pool.query("select c.clave as id, c.nombre as nombre, c.apellido as apellido, c.telefono as telefono, d.nombre as nombred, p.nombre as nombrep from cliente c , direccion d, proveedor p where c.fk_direccion = d.clave and c.fk_proveedor = p.clave")
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
    await pool.query("select c.clave as id, c.nombre as nombre, c.apellido as apellido, c.telefono as telefono, d.nombre as nombred, p.nombre as nombrep from cliente c , direccion d, proveedor p where c.fk_direccion = d.clave and c.fk_proveedor = p.clave and clave = "+id)
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
    await pool.query("INSERT INTO cliente (nombre, apellido, telefono, fk_direccion, fk_proveedor) VALUES ("+cli.nombre+",'"+cli.apellido+"','"+cli.telefono+"', '"+cli.lugar+"', "+cli.fk_proveedor+")")
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
    await pool.query("UPDATE cliente SET nombre = "+cli.nombre+", apellido = '"+cli.apellido+"', telefono = '"+cli.telefono+"', fk_direccion = '"+cli.lugar+"', fk_proveedor = "+cli.fk_proveedor+" WHERE clave ="+id)
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
    await pool.query("DELETE FROM cliente WHERE clave = "+id)
        .then(response => {
            res.json('Cliente eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}

module.exports = clCtrl;