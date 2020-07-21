const envioCtrl = {};
const pool  = require('../database/database');

envioCtrl.getEnvio = async (req, res) => {
    await pool.query("select p.nombre as nombre, e.tipo_transporte as transporte, e.costo as costo, e.recargo as recargo, (e.costo * ((e.recargo +100)/100)) as total from IMA_envio e, IMA_direccion d, IMA_proveedor p where e.fk_direccion = d.clave and e.fk_proveedor = p.clave")
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

envioCtrl.getoneEnvio = async (req, res) => {
    const id = req.params.id;
    console.log('estoy aqui');
    await pool.query("select p.nombre as nombre, e.tipo_transporte as transporte, e.costo as costo, e.recargo as recargo, (e.costo * ((e.recargo +100)/100)) as total from IMA_envio e, IMA_direccion d, IMA_proveedor p where e.fk_direccion = d.clave and e.fk_proveedor = p.clave and e.clave = "+id+";")
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

envioCtrl.getCondProv = async (req, res) => {
    const proveedor = req.params.proveedor;
    console.log('estoy aqui');
    console.log(proveedor);
    await pool.query("select e.clave as id, p.nombre as nombre, d.nombre as nombred, e.tipo_transporte as transporte, e.costo as costo, e.recargo as recargo, (e.costo * ((100+ e.recargo)/100)) as total from IMA_envio e, IMA_proveedor p, IMA_direccion d where e.fk_proveedor = p.clave and e.fk_direccion = d.clave and e.fk_proveedor = "+proveedor)
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

envioCtrl.createEnvio = async (req, res) => {
    const event = req.body;
    await pool.query("INSERT INTO IMA_envio (costo, recargo, tipo_transporte, fk_direccion, fk_proveedor) VALUES ("+event.costo+", "+event.recargo+", '"+event.transporte+"', "+event.direccion+", "+event.proveedor+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

envioCtrl.editEnvio = async (req, res) => {
    const id = req.params.id;
    const event = req.body;
    await pool.query("UPDATE IMA_envio SET costo = "+event.costo+",  recargo = "+event.recargo+", tipo_transporte = '"+event.transporte+"', fk_direccion = "+event.direccion+", fk_proveedor ="+event.proveedor+" WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

envioCtrl.deleteEnvio = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM IMA_envio WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = envioCtrl;