const pedidoCtrl = {};
const pool = require('../database/database');

pedidoCtrl.getPedidos = async (req, res) => {
    await pool.query("select c.nro_factura as id, ca.nombre as nombre, c.fecha_compra as fecha, dc.cantidad as cantidad, dc.precio_unitario as precio, sum(dc.cantidad*dc.precio_unitario) as total from compra c, detalle_compra dc, cerveza_artesanal ca WHERE c.nro_factura = dc.fk_compra and ca.clave = dc.fk_cerveza group by c.nro_factura, ca.nombre, c.fecha_compra, dc.cantidad, dc.precio_unitario")
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
    const nro_factura = req.params.id;
    await pool.query("select c.nro_factura as id, ca.nombre as nombre, c.fecha_compra as fecha, dc.cantidad as cantidad, dc.precio_unitario as precio, sum(dc.cantidad*dc.precio_unitario) as total from compra c, detalle_compra dc, cerveza_artesanal ca WHERE c.nro_factura = dc.fk_compra and ca.clave = dc.fk_cerveza and c.nro_factura = "+nro_factura+" group by c.nro_factura, ca.nombre, c.fecha_compra, dc.cantidad, dc.precio_unitario")
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
    await pool.query("INSERT INTO compra (total,fecha_compra,fk_tienda_fisica, fk_tienda_virtual, fk_cliente) VALUES ("+pedido.total+","+pedido.fecha_compra+","+pedido.fk_tienda_fisica+", "+pedido.fk_tienda_virtual+", "+pedido.fk_cliente+") RETURNING nro_factura")
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