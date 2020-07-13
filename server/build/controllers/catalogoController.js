const catCtrl = {};
const pool  = require('../database/database');

catCtrl.getCatalogos = async (req, res) => {
    await pool.query("select c.clave as id, p.nombre as nombre, i.nombre as inombre, co.exclusividad as exclusividad from catalogo c, contrato co, perfume p, ingrediente_otro i where c.fk_contrato = co.clave and c.fk_perfume = p.clave and c.fk_ingrediente_otro = i.clave union select c.clave as id, p.nombre as nombre, ing.nombre as ingnombre, co.exclusividad as exclusividad from catalogo c, contrato co, perfume p, ing_materia_esencial ing where c.fk_contrato = co.clave and c.fk_perfume = p.clave and c.fk_ing_materia_esencial = ing.ipc;")
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

catCtrl.getCatalogo = async (req, res) => {
    const proveedor = req.params.proveedor;
    const productor = req.params.productor;
    const id = req.params.id;
    await pool.query("select c.clave as id, p.nombre as nombre, i.nombre as inombre, co.exclusividad as exclusividad from catalogo c, contrato co, perfume p, ingrediente_otro i where c.fk_contrato = co.clave and c.fk_perfume = p.clave and c.fk_ingrediente_otro = i.clave and co.fk_proveedor = "+proveedor+" and co.fk_productor = "+productor+" and co.clave = "+id+" union select c.clave as id, p.nombre as nombre, ing.nombre as ingnombre, co.exclusividad as exclusividad from catalogo c, contrato co, perfume p, ing_materia_esencial ing where c.fk_contrato = co.clave and c.fk_perfume = p.clave and c.fk_ing_materia_esencial = ing.ipc and co.fk_proveedor = "+proveedor+" and co.fk_productor = "+productor+" and co.clave = "+id+";")
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

catCtrl.getPerfumeP = async (req, res) => {
    const productor = req.params.productor;
    const id = req.params.id;
    await pool.query("select clave as id, nombre, fk_productor as productor from perfume where fk_productor = "+productor+";")
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

catCtrl.getIngreP = async (req, res) => {
    const proveedor = req.params.proveedor;
    await pool.query("select i.clave as id, i.nombre as nombre from ingrediente_otro i, proveedor p where i.fk_proveedor = p.clave and p.clave = "+proveedor)
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

catCtrl.getIngMateriaP = async (req, res) => {
    const proveedor = req.params.proveedor;
    await pool.query("select i.ipc as id, i.nombre as nombre from ing_materia_esencial i, proveedor p where i.fk_proveedor = p.clave and p.clave = "+proveedor)
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

// catCtrl.getRecomendador = async (req, res) => {
//     await pool.query("select c.clave as id, p.nombre as nombre, c.cantidad as cantidad, c.exclusividad as exclusividad from catalogo c, contrato co, perfume p where c.fk_contrato = co.clave and c.fk_perfume = p.clave;")
//         .then(response => {
//             if(response.rowCount)
//                 res.json(response.rows);
//             else
//                 res.json('Sin resultados');
//         })
//         .catch(err => {
//             console.log(err);
//             res.json('Ha ocurrido un error');
//         })
// };

catCtrl.createCatalogo = async (req, res) => {
    const event = req.body;
    console.log(event);
    await pool.query("INSERT INTO catalogo (fk_ing_materia_esencial, fk_ingrediente_otro, fk_contrato, fk_perfume) VALUES ("+event.ingrediente+", "+event.materia+", "+event.contrato+", "+event.perfume+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

// catCtrl.editEvento = async (req, res) => {
//     const id = req.params.id;
//     const event = req.body;
//     await pool.query("UPDATE evento SET nombre = '"+event.nombre+"',  fk_direccion = "+event.lugar+", cant_entrada_disponible = "+event.entradas_disponibles+", cant_entrada_vendida = "+event.entradas_vendidas+", fecha_inicio ='"+event.fecha_inicio+"', fecha_fin = '"+event.fecha_fin+"' WHERE clave = "+id+";")
//         .then(response => {
//             res.json('Actualizado');
//         })
//         .catch(err => {
//             console.log(err);
//             res.json('Ha ocurrido un error');
//         })
// };

// catCtrl.deleteEvento = async (req, res) => {
//     const id = req.params.id;
//     await pool.query("DELETE FROM evento WHERE clave = "+id+";")
//         .then(response => {
//             res.json('Evento eliminado');
//         })
//         .catch(err => {
//             console.log(err);
//             res.json('Ha ocurrido un error');
//         })
// };

module.exports = catCtrl;