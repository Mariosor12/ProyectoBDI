const priCtrl = {};
const pool = require('../database/database');

priCtrl.getPrivilegios = async (req,res) => {
    await pool.query("SELECT clave, tipo FROM IMA_Privilegio")
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

priCtrl.getPrivilegio = async (req,res) => {
    const id = req.params.id;
    await pool.query("SELECT tipo FROM IMA_Privilegio WHERE clave = "+id)
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

priCtrl.getrolPri = async (req,res) => {
    const id = req.params.id;
    await pool.query("SELECT p.clave as clave, p.tipo as tipo FROM IMA_Privilegio p, IMA_Rol_Privilegio rp WHERE rp.fk_rol = "+id+" AND p.clave = fk_privilegio")
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
}; // Trae todos los privilegios que pertenecen a un mismo rol

priCtrl.getrolPriNo = async (req,res) => {
    const id = req.params.id;
    await pool.query("SELECT p.clave AS clave, p.tipo AS tipo FROM IMA_Privilegio p WHERE p.clave NOT IN ( SELECT fk_privilegio  FROM Rol_Privilegio WHERE fk_rol = "+id+")")
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

module.exports = priCtrl;