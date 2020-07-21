const lCtrl = {};
const pool = require('../database/database');

lCtrl.getEstados = async (req, res) => {
    await pool.query("select * from IMA_direccion where tipo = 'Estado'")
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

lCtrl.getMunicipios = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT * FROM IMA_direccion WHERE tipo = 'Municipio' AND fk_direccion ="+id)
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

lCtrl.getParroquias = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT * FROM IMA_direccion WHERE tipo = 'Parroquia' AND fk_direccion ="+id)
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

lCtrl.getDireccion = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT e.nombre AS Estado, e.clave AS E_clave, b.nombre AS Municipio, b.clave AS m_clave, f.nombre AS Parroquia, f.clave AS p_clave FROM IMA_direccion E, IMA_direccion B, IMA_direccion F WHERE "+id+" = f.clave AND f.fk_direccion = b.clave AND b.fk_direccion = e.clave;")
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

module.exports = lCtrl;