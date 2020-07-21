const eventoCtrl = {};
const pool  = require('../database/database');

eventoCtrl.getEvento = async (req, res) => {
    await pool.query("SELECT e.clave AS id, e.nombre AS nombre, d.nombre AS lugar, e.cant_entrada_disponible AS entradas_disponibles, e.cant_entrada_vendida AS entradas_vendidas, e.fecha_inicio AS fecha_inicio, e.fecha_fin AS fecha_fin FROM IMA_evento e, IMA_direccion d WHERE e.fk_direccion= d.clave;")
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

eventoCtrl.getoneEvento = async (req, res) => {
    const id = req.params.id;
    await pool.query("select e.clave AS id, e.nombre as nombre, d.nombre as lugar, e.cant_entrada_disponible as entradas_disponibles, e.cant_entrada_vendida as entradas_vendidas, e.fecha_inicio as fecha_inicio, e.fecha_fin as fecha_fin from IMA_evento e, IMA_direccion d where e.fk_direccion= d.clave and e.clave = "+id+";")
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

eventoCtrl.createEvento = async (req, res) => {
    const event = req.body;
    await pool.query("INSERT INTO IMA_evento (nombre, fk_direccion, cant_entrada_disponible,cant_entrada_vendida, fecha_inicio, fecha_fin ) VALUES ('"+event.nombre+"', "+event.lugar+", "+event.entradas_disponibles+", "+event.entradas_vendidas+", '"+event.fecha_inicio+"','"+event.fecha_fin+"');")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

eventoCtrl.editEvento = async (req, res) => {
    const id = req.params.id;
    const event = req.body;
    await pool.query("UPDATE IMA_evento SET nombre = '"+event.nombre+"',  fk_direccion = "+event.lugar+", cant_entrada_disponible = "+event.entradas_disponibles+", cant_entrada_vendida = "+event.entradas_vendidas+", fecha_inicio ='"+event.fecha_inicio+"', fecha_fin = '"+event.fecha_fin+"' WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

eventoCtrl.deleteEvento = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM IMA_evento WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = eventoCtrl;