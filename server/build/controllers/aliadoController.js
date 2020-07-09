const aliCtrl = {};
const pool = require('../database/database');

aliCtrl.getAliadosPro = async (req, res) => {
    await pool.query("SELECT p.clave as id, p.nombre as razon, p.pag_web as pagina, p.telefono as tel, a.region as region from productor p left join asociacion_nacional a on p.fk_asociacion_nacional = a.clave")
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

aliCtrl.getAliadoPro = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT p.clave as id, p.nombre as razon, p.pag_web as pagina, p.telefono as tel, a.region as region from productor p left join asociacion_nacional a on p.fk_asociacion_nacional = a.clave where p.clave ="+id)
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

aliCtrl.createAliadoPro = async (req, res) => {
    const ali = req.body;
    await pool.query("INSERT INTO Productor (nombre, pag_web, telefono, fk_asociacion_nacional) VALUES ('"+ali.razon+"','"+ali.pagina+"','"+ali.tel+"', "+ali.region+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.editAliadoPro = async (req, res) => {
    const id = req.params.id;
    const ali = req.body;
    await pool.query("UPDATE productor SET nombre = '"+ali.razon+"', pag_web = '"+ali.pagina+"', telefono = '"+ali.tel+"', fk_asociacion_nacional = "+ali.region+" WHERE clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

aliCtrl.deleteAliadoPro = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM productor WHERE clave = "+id)
        .then(response => {
            res.json('Aliado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = aliCtrl;