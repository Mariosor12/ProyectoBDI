const pagoCtrl = {};
const client = require('../database/database');

pagoCtrl.getPagosOC = async (req,res) => {
    const id = req.params.id;
    await client.query("SELECT monto, fecha, fk_status_compra AS Venta, fk_tipo_pago AS tipo FROM Pago WHERE fk_tipo_pago = "+id)
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

pagoCtrl.createPago = async (req,res) => {
    const pago = req.body;
    console.log("llego aqui");
    await client.query("INSERT INTO pago (monto,fecha,fk_status_compra,fk_tipo_pago) VALUES ("+pago.monto+",'"+pago.fecha+"',"+pago.venta+","+pago.tipo+")")
        .then(response => {
            console.log("Paso el query");
            if(response.rowCount)
                res.json('Insertado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = pagoCtrl;