const recoCtrl = {};
const pool = require('../database/database');

recoCtrl.getRecomendador = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from perfume p, principal pr, familia_olfativa f, intensidad i, p_f pf, palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave")
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

recoCtrl.getOneRecomendador = async (req,res) => {
    const palabra = req.params.palabra;
    console.log(palabra);
    await pool.query("select p.clave as id, p.nombre as nombrep, p.genero as genero, f.nombre as nombref, f.descripcion as descripcionf, i.tipo as tipo, i.concentracion as concentracion, i.descripcion as descripcion, pc.palabra as palabra from perfume p, principal pr, familia_olfativa f, intensidad i, p_f pf, palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.palabra = '"+palabra+"'")
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

recoCtrl.createRecomendador = async (req,res) => {
    const reco = req.body;
    await pool.query("INSERT INTO palabra_clave (palabra) VALUES ('"+reco.nombre+"')")
        .then(response => {
            if(response.rowCount)
                res.json('Rol Insertado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

recoCtrl.editRecomendador = async (req,res) => {
    const id = req.params.id;
    const reco = req.body;
    await pool.query("UPDATE palabra_clave SET palabra = '"+reco.nombre+"' WHERE clave = "+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Actualizado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

recoCtrl.deleteRecomendador = async (req,res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM palabra_clave WHERE clave ="+id)
        .then(response => {
            if(response.rowCount)
                res.json('Rol Eliminado');
            else
                res.json('Sin resultados');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};



module.exports = recoCtrl;