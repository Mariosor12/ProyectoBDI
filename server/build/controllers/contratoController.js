const contratoCtrl = {};
const pool  = require('../database/database');

contratoCtrl.getContrato = async (req, res) => {
    await pool.query("select c.clave as id, p.nombre as nombrep, pr.nombre as nombrepr, c.fecha_inicio as fechai, c.fecha_fin as fechaf, c.descripcion as descripcion, c.exclusividad as exclusividad, c.fk_proveedor as proveedor, c.fk_productor as productor from contrato c,  proveedor p, productor pr where c.fk_proveedor = p.clave and c.fk_productor = pr.clave;")
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

contratoCtrl.getoneContrato = async (req, res) => {
    const id = req.params.id;
    await pool.query("select c.clave as id, p.nombre as nombrep, pr.nombre as nombrepr, c.fecha_inicio as fechai, c.fecha_fin as fechaf, c.descripcion as descripcion, c.exclusividad as exclusividad, c.fk_proveedor as proveedor, c.fk_productor as productor from contrato c,  proveedor p, productor pr where c.fk_proveedor = p.clave and c.fk_productor = pr.clave and c.clave = "+id+";")
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

contratoCtrl.createContrato = async (req, res) => {
    const event = req.body;
    await pool.query("INSERT INTO contrato (fecha_inicio, fecha_fin, descripcion, exclusividad, fk_proveedor, fk_productor ) VALUES ('"+event.fechai+"', '"+event.fechaf+"', '"+event.descripcion+"', '"+event.exclusividad+"', "+event.proveedor+","+event.productor+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

contratoCtrl.editContrato = async (req, res) => {
    const id = req.params.id;
    const event = req.body;
    await pool.query("UPDATE contrato SET fecha_inicio = '"+event.fechai+"',  fecha_fin = '"+event.fechaf+"', descripcion = '"+event.descripcion+"', exclusividad = '"+event.exclusividad+"', fk_proveedor ="+event.proveedor+", fk_productor = "+event.productor+" WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

contratoCtrl.deleteContrato = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM contrato WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = contratoCtrl;