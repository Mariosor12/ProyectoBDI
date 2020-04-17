const productoCtrl = {};
const pool  = require('../database/database');

productoCtrl.getProducto = async (req, res) => {
    await pool.query("select ca.clave as id, a.tipo, ca.nombre, ca.descripcion, ca.precio_unitario from cerveza_artesanal ca, ale a where ca.fk_ale = a.clave union select ca.clave, l.tipo, ca.nombre, ca.descripcion, ca.precio_unitario from cerveza_artesanal ca, lager l where ca.fk_lager = l.clave;")
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

productoCtrl.getoneProducto = async (req, res) => {
    const id = req.params.id;
    await pool.query("select ca.clave as id, a.tipo, ca.nombre, ca.descripcion, ca.precio_unitario, ca.fk_ale, ca.fk_lager  from cerveza_artesanal ca, ale a where ca.fk_ale = a.clave and ca.clave = "+id+" union select ca.clave, l.tipo, ca.nombre, ca.descripcion, ca.precio_unitario, ca.fk_ale, ca.fk_lager from cerveza_artesanal ca, lager l where ca.fk_lager = l.clave and ca.clave = "+id+";")
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

productoCtrl.createProducto = async (req, res) => {
    const producto = req.body;
    await pool.query("INSERT INTO cerveza_artesanal (nombre, descripcion, precio_unitario,fk_ale, fk_lager) VALUES ('"+producto.nombre+"', '"+producto.descripcion+"', "+producto.precio_unitario+", "+producto.fk_ale+", "+producto.fk_lager+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

productoCtrl.editProducto = async (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    await pool.query("UPDATE cerveza_artesanal SET nombre = '"+producto.nombre+"',  descripcion = '"+producto.descripcion+"', precio_unitario = "+producto.precio_unitario+", fk_ale = "+producto.fk_ale+", fk_lager ='"+producto.fk_lager+"' WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

productoCtrl.deleteProducto = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM cerveza_artesanal WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = productoCtrl;