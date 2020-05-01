const ocCtrl = {};
const pool = require('../database/database');

ocCtrl.getOrdenesVenta = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta")
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

ocCtrl.getOrdenVenta = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE clave = "+id)
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

ocCtrl.getOrdenesVentaAliado = async (req, res) => {
    const id = req.params.id;
    await pool.query("sELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_proveedor = "+id)
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

ocCtrl.createOrdenVenta = async (req, res) => {
    const oc = req.body;
    await pool.query("INSERT INTO status_venta (fecha,fk_proveedor) VALUES ('"+oc.fecha+"',"+oc.proveedor+") RETURNING clave AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

ocCtrl.getOrdenVentaReservada = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 1")
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

ocCtrl.getOrdenVentaOrdenada = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 2")
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

ocCtrl.getOrdenVentaCancelado = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 3")
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

ocCtrl.getOrdenVentaPagado = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 4")
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

ocCtrl.getOrdenVentaEspAprobacion = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 5")
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

ocCtrl.getOrdenVentaRevision = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 6")
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

ocCtrl.getOrdenVentaEntregado = async (req, res) => {
    await pool.query("SELECT clave, fecha, fk_proveedor AS proveedor FROM status_venta WHERE fk_status = 7")
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

ocCtrl.recibirVenta = async (req, res) => {
    const id = req.params.id;
    await pool.query("UPDATE status_venta SET fk_status = 7 WHERE clave = "+id+" AND fk_status <> 7")
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

module.exports = ocCtrl;