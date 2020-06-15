const pedidoCtrl = {};
const pool = require('../database/database');

pedidoCtrl.getPedidos = async (req, res) => {
    await pool.query("select p.clave as id, c.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from pedido p, compra c where p.fk_compra = c.clave union select p.clave as id, v.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from pedido p, venta v where p.fk_venta = v.clave ")
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

pedidoCtrl.getPedido = async (req, res) => {
    const id = req.params.id;
    await pool.query("select p.clave as id, c.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from pedido p, compra c where p.fk_compra = c.clave and p.clave = "+id+" union select p.clave as id, v.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from pedido p, venta v where p.fk_venta = v.clave and p.clave = "+id)
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

pedidoCtrl.getPedidosOC = async (req, res) => {
    const id = req.params.id;
    await pool.query("select c.nro_factura, dc.cantidad, sc.clave, ca.nombre from compra c, status_compra sc, detalle_compra dc, cerveza_artesanal ca where  sc.clave = "+id+" and c.fk_cliente = sc.fk_cliente and c.nro_factura = dc.fk_compra and dc.fk_cerveza = ca.clave")
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

pedidoCtrl.createPedido = async (req, res) => {
    const pedido = req.body;
    await pool.query("INSERT INTO pedido (cantidad,total,fk_compra, fk_venta, fk_envio, fk_proveedor) VALUES ("+pedido.cantidad+","+pedido.total+","+pedido.compras+", "+pedido.venta+", "+pedido.envio+", "+pedido.proveedor+") RETURNING clave")
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


module.exports = pedidoCtrl;