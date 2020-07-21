const renCtrl = {};
const pool = require('../database/database');

renCtrl.getRenovacion = async (req, res) => {
    await pool.query("select r.clave as id, c.clave as clave, p.clave as clavep, pr.clave as clavepr, c.exclusividad as exclusivo, r.fecha as fecha, c.fecha_inicio as fechai, p.nombre as nombrep, pr.nombre as nombrepr from IMA_renueva r, IMA_contrato c, IMA_proveedor p, IMA_productor pr where r.fk_contrato = c.clave and c.fk_proveedor = p.clave and c.fk_productor = pr.clave and (current_date - c.fecha_inicio <= 1)")
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

renCtrl.getoneRenovacion = async (req, res) => {
    const id = req.params.id;
    await pool.query("select r.clave as id, c.clave as clave, r.fecha as fecha, c.fecha_inicio as fechai, p.nombre as nombrep, pr.nombre as nombrepr from IMA_renueva r, IMA_contrato c, IMA_proveedor p, IMA_productor pr where r.fk_contrato = c.clave and c.fk_proveedor = p.clave and c.fk_productor = pr.clave and (current_date - c.fecha_inicio <= 1) and r.clave ="+id)
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

renCtrl.createRenovacion = async (req, res) => {
    const ali = req.body;
    console.log(ali)
    await pool.query("INSERT INTO IMA_renueva (fecha, fk_contrato) VALUES ('"+ali.fechai+"','"+ali.clave+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

renCtrl.editRenovacion = async (req, res) => {
    const id = req.params.id;
    const ali = req.body;
    await pool.query("UPDATE IMA_productor SET nombre = '"+ali.razon+"', pag_web = '"+ali.pagina+"', telefono = '"+ali.tel+"', fk_asociacion_nacional = "+ali.region+" WHERE clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

renCtrl.deleteRenovacion = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM IMA_renueva r WHERE r.clave = "+id)
        .then(response => {
            res.json('Aliado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = renCtrl;