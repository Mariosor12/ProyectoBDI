const evalCtrl = {};
const pool  = require('../database/database');

evalCtrl.getEvaluacion = async (req, res) => {
    await pool.query("select e.fechai as fechai, c.fechaf as fechaf, p.nombre as nombrep, pr.nombre as nombrepr, r.tipoeval as tipo, e.rangoi as rangoi, e.rangof as rangof, cr.nombreetiq as etiqueta, c.peso as peso, r.resultado as resultado from escala e, cri_eval c, resultado_final r, criterio cr, proveedor p, productor pr where e.fechai = c.fechai and (r.fecha = e.fechai or r.fecha = e.fechaf) and c.fk_criterio = cr.clave and r.fk_productor = pr.clave and r.fk_proveedor = p.clave ")
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

evalCtrl.getoneEvaluacion = async (req, res) => {
    const id = req.params.id;
    await pool.query("select e.clave AS id, e.nombre as nombre, d.nombre as lugar, e.cant_entrada_disponible as entradas_disponibles, e.cant_entrada_vendida as entradas_vendidas, e.fecha_inicio as fecha_inicio, e.fecha_fin as fecha_fin from evento e, direccion d where e.fk_direccion= d.clave and e.clave = "+id+";")
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

evalCtrl.getPagoProv = async (req, res) => {
    const proveedor = req.params.proveedor;
    await pool.query("select cp.numero as id, cp.tipo as tipo, cp.cuota as cuota, cp.porccuotas as porcuotas, cp.meses as mes from cond_c cc, contrato c, condicion_pago cp where cc.fk_contrato = c.clave and cc.fk_condicion_pago = cp.numero and c.fk_proveedor = "+proveedor)
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

evalCtrl.getProveedorFiltro = async (req, res) => {
    const id = req.params.id;
    const productor = req.params.productor;
    console.log(productor);
    await pool.query("select distinct p.clave as id, p.nombre as razon from contrato c, proveedor p, miembro_ifra m where c.fk_proveedor = p.clave and m.fk_proveedor = p.clave and m.fechaf is null and c.fecha_cancela is null")
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

// evalCtrl.createEvaluacion = async (req, res) => {
//     const event = req.body;
//     await pool.query("INSERT INTO evento (nombre, fk_direccion, cant_entrada_disponible,cant_entrada_vendida, fecha_inicio, fecha_fin ) VALUES ('"+event.nombre+"', "+event.lugar+", "+event.entradas_disponibles+", "+event.entradas_vendidas+", '"+event.fecha_inicio+"','"+event.fecha_fin+"');")
//         .then(response => {
//             res.json('Insertado');
//         })
//         .catch(err => {
//             console.log(err);
//             res.json('Ha ocurrido un error');
//         })
// };

evalCtrl.createCriterioEvaluacion = async (req, res) => {
    const event = req.body;
    console.log(event);
    await pool.query("INSERT INTO cri_eval (fechai, fechaf, peso, tipoform, fk_productor, fk_criterio ) VALUES ('"+event.fechai+"', '"+event.fechaf+"', "+event.peso+", '"+event.tipo+"', "+event.productor+","+event.criterio+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

evalCtrl.editEvaluacion = async (req, res) => {
    const id = req.params.id;
    const event = req.body;
    await pool.query("UPDATE evento SET nombre = '"+event.nombre+"',  fk_direccion = "+event.lugar+", cant_entrada_disponible = "+event.entradas_disponibles+", cant_entrada_vendida = "+event.entradas_vendidas+", fecha_inicio ='"+event.fecha_inicio+"', fecha_fin = '"+event.fecha_fin+"' WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

evalCtrl.deleteEvaluacion = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM evento WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = evalCtrl;