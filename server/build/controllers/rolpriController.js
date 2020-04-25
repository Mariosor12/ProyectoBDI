const rolpriCtrl = {};
const pool = require('../database/database');

rolpriCtrl.getRolesPri = async (req,res) => {
    await pool.query("select clave, fk_rol as Rol , fk_privilegio as Privilegio from rol_privilegio")
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
}; //Te devuelve todos los roles con sus privilegios

rolpriCtrl.getRolPri = async (req,res) => {
    const id = req.params.id;
    await pool.query("select clave as id, fk_rol as Rol, fk_privilegio as Privilegio from rol_privilegio where clave = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve un rol y su privilegio en especifico con la clave del rol_pri

rolpriCtrl.getRolPriR = async (req,res) => {
    const id = req.params.id;
    await pool.query("select clave, fk_rol as Rol , fk_privilegio as Privilegio from rol_privilegio where fk_rol = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve los privilegios que tiene un rol en especifico

rolpriCtrl.getRolPriP = async (req,res) => {
    const id = req.params.id;
    await pool.query("select clave, fk_rol as Rol , fk_privilegio as Privilegio from rol_privilegio where fk_privilegio = "+id)
        .then(response=>{
            if(response.rowCount)
                res.json(response.rows);
            else
                res.json('Sin resultados');
        })
        .catch(err =>{
            console.log(err);
            res.json(' Ha ocurrido un error');
        })
}// Te devuelve un privilegio en especifico, con todos los roles en donde está asignado 

rolpriCtrl.createRolPri = async (req, res) => {
    const rolpri = req.body;
    await pool.query("Insert into rol_privilegio (fk_rol, fk_privilegio) Values ("+rolpri.rol+","+rolpri.privilegio+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};// Asignas un privilegio con un rol

rolpriCtrl.deleteRolPri = async (req, res) => {
    const id = req.params.id;
    const id2 = req.params.id2;
    await pool.query("DELETE FROM rol_privilegio WHERE fk_rol = "+id2+" and fk_privilegio = "+id)
        .then(response =>{
            if(response.rowCount)
                res.json('Eliminado');
            else
                res.json('Sin Resultados');
        })
        .catch(err=>{
            console.log(err);
            res.json('Ha ocurrido un error');
        })
}// Eliminas la relacion del rol y el privilegio por la clave

module.exports = rolpriCtrl;