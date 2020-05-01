const aliCtrl = {};
const pool = require('../database/database');

aliCtrl.getAliados = async (req, res) => {
    await pool.query("SELECT rif as id, razon_social as razon, denominacion_comercial as comercial, pagina_web as pagina, fecha_afiliacion as fecha, fk_direccion as lugar FROM proveedor")
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

aliCtrl.getAliado = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT rif as id, razon_social as razon, denominacion_comercial as comercial, pagina_web as pagina, fecha_afiliacion as fecha, fk_direccion as lugar FROM proveedor WHERE rif ="+id)
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

aliCtrl.createAliado = async (req, res) => {
    const ali = req.body;
    await pool.query("INSERT INTO Aliado (razon_social, denominacion_comercial, pagina_web, fecha_afiliacion, fk_lugar) VALUES ('"+ali.razon+"','"+ali.comercial+"','"+ali.pagina+"','"+ali.fecha+"', "+ali.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.editAliado = async (req, res) => {
    const id = req.params.id;
    const ali = req.body;
    await pool.query("UPDATE proveedor SET razon_social = '"+ali.razon+"', denominacion_comercial = '"+ali.comercial+"', pagina_web = '"+ali.pagina+"', fecha_afiliacion = "+ali.fecha+", fk_lugar = "+ali.lugar+" WHERE rif = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.deleteAliado = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM proveedeor WHERE rif = "+id)
        .then(response => {
            res.json('Aliado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = aliCtrl;