const tipoPagoCtrl = {};
const pool  = require('../database/database');

tipoPagoCtrl.getTipoPagos = async (req, res) => {
    await pool.query("SELECT * FROM IMA_condicion_pago")
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

tipoPagoCtrl.getTransferencias = async (req, res) => {
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Transferencia'")
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

tipoPagoCtrl.getTransferencia = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Transferencia' AND numero ="+id)
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

tipoPagoCtrl.getTarsCredito = async (req, res) => {
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Tar_credito'")
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

tipoPagoCtrl.getTarCredito = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Tar_credito' AND numero ="+id)
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

tipoPagoCtrl.getCheques = async (req, res) => {
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Cheque'")
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

tipoPagoCtrl.getCheque = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Cheque' AND numero ="+id)
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

tipoPagoCtrl.getTarsDebito = async (req, res) => {
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Tar_debito'")
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

tipoPagoCtrl.getTarDebito = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT numero AS id, cuota AS cuota, porccuotas AS porcuotas, meses AS mes FROM IMA_condicion_pago WHERE tipo = 'Tar_debito' AND numero ="+id)
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

tipoPagoCtrl.createTipoPago = async (req,res) => {
    const tp = req.body;
    console.log(tp);
    await pool.query("INSERT INTO IMA_condicion_pago (tipo, cuota, porccuotas, meses) VALUES ('"+tp.tipo+"',"+tp.cuotas+","+tp.porcuotas+", "+tp.mes+") RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tipoPagoCtrl.createTransferencia = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO IMA_condicion_pago (tipo, cuota, porccuotas, meses) VALUES ('Transferencia',"+tp.cuota+","+tp.porcuotas+", "+tp.mes+") RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tipoPagoCtrl.createTarCredito = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO IMA_condicion_pago (tipo, cuota, porccuotas, meses) VALUES ('Tar_credito',"+tp.cuota+","+tp.porcuotas+", "+tp.mes+") RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

tipoPagoCtrl.createCheque = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO IMA_condicion_pago (tipo, cuota, porccuotas, meses) VALUES ('Cheque',"+tp.cuota+","+tp.porcuotas+", "+tp.mes+") RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

/*tipoPagoCtrl.createCheque = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO Tipo_Pago (tp_tipo,tp_banco,tp_numero_cuenta) VALUES ('Cheque','"+tp.banco+"','"+tp.nrocuenta+"')")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};*/

tipoPagoCtrl.createTarDebito = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO IMA_condicion_pago (tipo, cuota, porccuotas, meses) VALUES ('Tar_debito',"+tp.cuota+","+tp.porcuotas+", "+tp.mes+") RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = tipoPagoCtrl;
