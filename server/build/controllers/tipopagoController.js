const tipoPagoCtrl = {};
const pool  = require('../database/database');

tipoPagoCtrl.getTipoPagos = async (req, res) => {
    await pool.query("SELECT * FROM tipo_pago")
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
    await pool.query("SELECT numero AS id, banco AS Banco, fecha AS Fecha FROM tipo_pago WHERE tipo = 'Transferencia'")
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
    await pool.query("SELECT numero AS id, banco AS Banco, fecha AS Fecha FROM tipo_pago WHERE tipo = 'Transferencia' AND numero ="+id)
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
    await pool.query("SELECT numero AS id, banco AS Banco, tipo_tar_cre AS Tipo, fecha_vencimiento AS Vencimiento FROM tipo_pago WHERE tipo = 'Tar_credito'")
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
    await pool.query("SELECT numero AS id, banco AS Banco, tipo_tar_cre AS Tipo, fecha_vencimiento AS Vencimiento FROM tipo_pago WHERE tipo = 'Tar_credito' AND numero ="+id)
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
    await pool.query("SELECT numero AS id, banco AS Banco, numero_cuenta AS \"Nro. Cuenta\" FROM tipo_pago WHERE tipo = 'Cheque'")
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
    await pool.query("SELECT numero AS id, banco AS Banco, numero_cuenta AS \"Nro. Cuenta\" FROM tipo_pago WHERE tipo = 'Cheque' AND numero ="+id)
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
    await pool.query("SELECT numero AS id, banco AS Banco, tipo_tar_deb AS Tipo FROM tipo_pago WHERE tipo = 'Tar_debito'")
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
    await pool.query("SELECT numero AS id, banco AS Banco, tipo_tar_deb AS Tipo FROM tipo_pago WHERE tipo = 'Tar_debito' AND numero ="+id)
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

tipoPagoCtrl.createTransferencia = async (req,res) => {
    const tp = req.body;
    await pool.query("INSERT INTO tipo_pago (tipo,banco,fecha) VALUES ('Transferencia','"+tp.banco+"','"+tp.fecha+"') RETURNING numero AS id")
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
    await pool.query("INSERT INTO tipo_pago (tipo,banco,tipo_tar_cre,fecha_vencimiento) VALUES ('Tar_credito','"+tp.banco+"','"+tp.tipo+"','"+tp.vencimiento+"') RETURNING numero AS id")
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
    await pool.query("INSERT INTO tipo_pago (tipo,banco,numero_cuenta) VALUES ('Cheque','"+tp.banco+"','"+tp.nrocuenta+"') RETURNING numero AS id")
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
    await pool.query("INSERT INTO tipo_pago (tipo,banco,tipo_tar_deb) VALUES ('Tar_debito','"+tp.banco+"','"+tp.tipo+"') RETURNING numero AS id")
        .then(response => {
            res.json(response.rows);
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = tipoPagoCtrl;
