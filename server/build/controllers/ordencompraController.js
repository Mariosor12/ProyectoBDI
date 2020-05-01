const ovCtrl = {};
const pool = require('../database/database');

ovCtrl.getOrdenesCompra = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra")
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

ovCtrl.getOrdenCompra = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE clave = "+id)
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

ovCtrl.getOrdenesCompraAliado = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_cliente = "+id)
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

ovCtrl.createOrdenCompra = async (req, res) => {
    const ov = req.body;
    await pool.query("INSERT INTO status_compra (fecha_cambio,total,fk_cliente) VALUES ('"+ov.fecha_cambio+"',"+ov.total+",'"+ov.cliente+"')")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ovCtrl.getOrdenCompraReservada = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 1")
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

ovCtrl.getOrdenCompraOrdenada = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 2")
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

ovCtrl.getOrdenCompraCancelado = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 3")
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

ovCtrl.getOrdenCompraPagado = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 4")
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

ovCtrl.getOrdenCompraEspAprobacion = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 5")
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

ovCtrl.getOrdenCompraRevision = async (req, res) => {
    await pool.query("SELECT clave, fecha_cambio as fecha, total, fk_cliente AS cliente FROM status_compra WHERE fk_status = 6")
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

ovCtrl.getOrdenCompraEntregado = async (req, res) => {
    await pool.query("SELECT c.nro_factura as clave, sc.fecha_cambio as fecha, sc.total as total, sc.fk_cliente AS cliente FROM status_compra sc, compra c WHERE fk_status = 7 and c.fk_cliente = sc.fk_cliente")
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

ovCtrl.recibirCompra = async (req, res) => {
    const id = req.params.id;
    await pool.query("UPDATE status_compra SET fk_status = 7 WHERE clave = "+id+" AND fk_status <> 7")
        .then(response => {
            if(response.rowCount)
                res.json('Recibida');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = ovCtrl;