const aliproCtrl = {};
const pool = require('../database/database');

aliproCtrl.getAliProductos = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT cp.clave AS id, c.clave AS producto, c.nombre AS nombre, c.precio_unitario as precio, fk_proveedor AS aliado FROM cerveza_proveedor cp, cerveza_artesanal c WHERE c.clave = cp.fk_cerveza_artesanal AND fk_proveedor = "+id)
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

module.exports = aliproCtrl;