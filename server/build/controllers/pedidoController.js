const pedidoCtrl = {};
const pool = require('../database/database');

pedidoCtrl.getPedidos = async (req, res) => {
    await pool.query("select p.clave as id, c.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from IMA_pedido p, IMA_compra c where p.fk_compra = c.clave union select p.clave as id, v.fecha as fecha, p.cantidad as cantidad, p.total as total, p.fk_compra as compra, p.fk_venta as venta, p.fk_envio as envio, p.fk_proveedor as proveedor from pedido p, venta v where p.fk_venta = v.clave ")
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
    const contrato = req.params.contrato;
    console.log(contrato);
    await pool.query("select p.clave, p.fecha as fecha, p.fecha_cont as fechaf, p.estatus as estatus, p.nro_factura as factura, dp.cantidad as cantidad, p.total as total, pr.nombre, cp.tipo as tipo, e.tipo_transporte as transporte, e.costo as costo, e.recargo as recargo, cp.porccuotas as cuota, cp.meses as meses, (total + (costo * (recargo + 100)/100)) as totalm from IMA_pedido p, IMA_cond_c c, IMA_condicion_pago cp, IMA_proveedor pr, IMA_envio e, IMA_contrato co, IMA_def_ped dp where p.fk_cond_c = c.clave and p.fk_condicion_pago = cp.numero and p.fk_proveedor = pr.clave and c.fk_envio = e.clave and c.fk_contrato = co.clave and dp.fk_pedido = p.clave and p.estatus = 'Pendiente' and co.fk_productor = "+contrato)
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

pedidoCtrl.getPedidoCantidad = async (req, res) => {
    const cond = req.params.cond;
    const pago = req.params.pago;
    const proveedor = req.params.proveedor;
    await pool.query("select clave as id from IMA_pedido where fk_cond_c = "+cond+" and fk_condicion_pago = "+pago+" and fk_proveedor = "+proveedor+"")
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

pedidoCtrl.getPedidoAceptado = async (req, res) => {
    const contrato = req.params.contrato;
    console.log(contrato);
    await pool.query("select p.clave, p.fecha as fecha, p.fecha_cont as fechaf, p.estatus as estatus, p.nro_factura as factura, dp.cantidad as cantidad, p.total as total, pr.nombre, cp.tipo as tipo, e.tipo_transporte as transporte, e.costo as costo, e.recargo as recargo, (total + (costo * (recargo + 100)/100)) as totalm from IMA_pedido p, IMA_cond_c c, IMA_condicion_pago cp, IMA_proveedor pr, IMA_envio e, IMA_contrato co, IMA_def_ped dp where p.fk_cond_c = c.clave and p.fk_condicion_pago = cp.numero and p.fk_proveedor = pr.clave and c.fk_envio = e.clave and c.fk_contrato = co.clave and dp.fk_pedido = p.clave and p.estatus = 'Aceptado' and co.fk_productor = "+contrato)
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
    await pool.query("select c.nro_factura, dc.cantidad, sc.clave, ca.nombre from IMA_compra c, IMA_status_compra sc, IMA_detalle_compra dc, IMA_cerveza_artesanal ca where  sc.clave = "+id+" and c.fk_cliente = sc.fk_cliente and c.nro_factura = dc.fk_compra and dc.fk_cerveza = ca.clave")
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
    await pool.query("INSERT INTO IMA_pedido (fecha, fecha_cont, estatus, nro_factura, total, fk_cond_c, fk_condicion_pago, fk_proveedor) VALUES ('"+pedido.fechai+"',"+pedido.fechaf+",'"+pedido.estatus+"', "+pedido.factura+", "+pedido.total+", "+pedido.cond+", "+pedido.pago+", "+pedido.proveedor+") RETURNING clave")
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

pedidoCtrl.createPedidoDef = async (req, res) => {
    const pedido = req.body;
    await pool.query("INSERT INTO IMA_def_ped (cantidad, fk_pedido) VALUES ("+pedido.cantidad+","+pedido.id+") RETURNING clave")
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

pedidoCtrl.editPedido = async (req, res) => {
    const event = req.body;
    console.log(event)
    await pool.query("UPDATE IMA_pedido SET  estatus = 'Aceptado' WHERE clave = "+event.clave+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

pedidoCtrl.createPedidoCant = async (req, res) => {
    const pedido = req.body;
    console.log(pedido)
    await pool.query("INSERT INTO IMA_def_ped (cantidad) VALUES ("+pedido.cantidad+") RETURNING clave")
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