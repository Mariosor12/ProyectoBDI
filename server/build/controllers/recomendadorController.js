const recoCtrl = {};
const pool = require('../database/database');

recoCtrl.getRecomendador = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 1 and 41")
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

recoCtrl.getRecomendadorPerGen = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 42 and 44")
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

recoCtrl.getRecomendadorPerGenM = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 42 and 44")
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

recoCtrl.getRecomendadorPerGenU = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 42 and 44")
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

recoCtrl.getRecomendadorPerInt = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 45 and 47")
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
recoCtrl.getRecomendadorPerCar = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 48 and 52")
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
recoCtrl.getRecomendadorPerFam = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 53 and 60")
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
recoCtrl.getRecomendadorPerOca = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 61 and 63")
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

recoCtrl.getRecomendadorPerPer = async (req,res) => {
    await pool.query("select distinct pc.palabra as palabra from IMA_perfume p, IMA_principal pr, IMA_familia_olfativa f, IMA_intensidad i, IMA_p_f pf, IMA_palabra_clave pc where pr.fk_perfume = p.clave and pr.fk_familia_olfativa = f.clave and i.fk_perfume = p.clave and pf.fk_familia_olfativa = f.clave and pf.fk_palabra_clave = pc.clave and pc.clave between 64 and 67")
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
    console.log('Enatra')
    const palabra = req.params.palabra;
    const palabra2 = req.params.palabra2;
    const palabra3 = req.params.palabra3;
    const palabra4 = req.params.palabra4;
    const palabra5 = req.params.palabra5;
    const palabra6 = req.params.palabra6;
    const palabra7 = req.params.palabra7;
    console.log(palabra);
    await pool.query("SELECT distinct ima_perfume.clave as id, ima_perfume.nombre as nombrep, ima_perfume.genero as genero, ima_familia_olfativa.nombre as nombref, ima_familia_olfativa.descripcion as descripcionf, ima_intensidad.tipo as tipo, ima_intensidad.concentracion as concentracion, ima_intensidad.descripcion as descripcion, ima_palabra_clave.palabra as palabra from ima_perfume join ima_principal on ima_principal.fk_perfume=ima_perfume.clave join ima_familia_olfativa on ima_familia_olfativa.clave=ima_principal.fk_familia_olfativa join ima_intensidad on ima_intensidad.fk_perfume = ima_perfume.clave join ima_p_f on ima_p_f.fk_familia_olfativa=ima_familia_olfativa.clave join ima_palabra_clave on ima_palabra_clave.clave= ima_p_f.fk_palabra_clave where ima_palabra_clave.palabra='"+palabra+"' or ima_palabra_clave.palabra='"+palabra2+"' or ima_palabra_clave.palabra='"+palabra3+"' or ima_palabra_clave.palabra='"+palabra4+"' or  ima_palabra_clave.palabra='"+palabra5+"' or ima_palabra_clave.palabra='"+palabra6+"' or ima_palabra_clave.palabra='"+palabra7+"'")
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
    await pool.query("INSERT INTO IMA_palabra_clave (palabra) VALUES ('"+reco.nombre+"')")
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
    await pool.query("UPDATE IMA_palabra_clave SET palabra = '"+reco.nombre+"' WHERE clave = "+id)
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
    await pool.query("DELETE FROM IMA_palabra_clave WHERE clave ="+id)
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