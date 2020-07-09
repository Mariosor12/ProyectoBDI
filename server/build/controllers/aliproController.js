const aliproCtrl = {};
const pool = require('../database/database');

aliproCtrl.getAliProductos = async (req, res) => {
    const id = req.params.id;
    await pool.query("select p.clave as id, p.nombre as nombre, pr.clave as productor from perfume p, productor pr where p.fk_productor = pr.clave AND p.fk_productor = "+id)
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

aliproCtrl.createAliProducto = async (req, res) => {
    const am = req.body;
    await pool.query("INSERT INTO cerveza_proveedor (fk_cerveza_artesanal, fk_proveedor) VALUES ("+am.producto+","+am.aliado+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliproCtrl.deleteAliPro = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM cerveza_proveedor WHERE clave = "+id)
        .then(response => {
            res.json('Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};


aliproCtrl.getAliadosProv = async (req, res) => {
    await pool.query("SELECT p.clave as id, p.nombre as razon, p.pag_web as pagina, p.telefono as tel, d.nombre as lugar, a.region as region from  direccion d, proveedor p left join asociacion_nacional a on p.fk_asociacion_nacional = a.clave where p.fk_direccion = d.clave")
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

aliproCtrl.getAliadoProv = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT clave as id, nombre as razon, pag_web as pagina, telefono as tel, activo, membresia, fk_direccion as lugar FROM proveedor WHERE clave ="+id)
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

aliproCtrl.createAliadoProv = async (req, res) => {
    const ali = req.body;
    await pool.query("INSERT INTO Proveedor (nombre, pag_web, telefono, activo, membresia, fk_direccion) VALUES ('"+ali.razon+"','"+ali.pagina+"','"+ali.tel+"','"+ali.activo+"', '"+ali.membresia+"', "+ali.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliproCtrl.editAliadoProv = async (req, res) => {
    const id = req.params.id;
    const ali = req.body;
    await pool.query("UPDATE proveedor SET nombre = '"+ali.razon+"', pag_web = '"+ali.pagina+"', telefono = '"+ali.tel+"', activo = '"+ali.activo+"', membresia = '"+ali.membresia+"',fk_direccion = "+ali.lugar+" WHERE clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliproCtrl.deleteAliadoProv = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM proveedor WHERE clave = "+id)
        .then(response => {
            res.json('Aliado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliproCtrl.getIngre = async (req, res) => {  // busca todas las presentaciones que tiene un perfume específico
    const id = req.params.id;
    await pool.query("select i.clave as id, i.nombre as nombre, i.costo as costo, i.fk_proveedor as proveedor, p.clave as proveedores from ingrediente i, proveedor p WHERE i.fk_proveedor = "+id+" AND i.fk_proveedor = p.clave")
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

aliproCtrl.getIngredientes = async (req, res) => {
    await pool.query("SELECT clave AS id, nombre AS cantidad, fk_proveedor as proveedor FROM Ingrediente")
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

module.exports = aliproCtrl;