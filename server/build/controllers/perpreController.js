const minPreCtrl = {};
const client  = require('../database/database');

minPreCtrl.getMinPresentaciones = async (req, res) => {
    await client.query("SELECT clave AS id, fk_perfume AS Perfume, fk_presentacion AS Presentacion, costo FROM per_pre")
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

minPreCtrl.getMinPre = async (req, res) => {  // busca todas las presentaciones que tiene un perfume específico
    const id = req.params.id;
    await client.query("SELECT pp.clave AS id, p.numero as Cantidad, pp.fk_perfume AS Perfume, pp.fk_presentacion AS Presentacion, pp.costo AS Costo FROM per_pre pp, Presentacion p WHERE pp.fk_perfume = "+id+" AND pp.fk_presentacion = p.clave")
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

minPreCtrl.getPreMin = async (req, res) => {  // busca todos los perfumes con la presentación indicada
    const id = req.params.id;
    await client.query("SELECT pp.clave AS id, pp.fk_perfume AS Perfume, pp.fk_presentacion AS Presentacion, pp.costo AS Costo FROM per_pre WHERE pp.fk_presentacion = "+id)
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

minPreCtrl.getMinPre2 = async (req, res) => {  // busca todos los perfumes con la presentación indicada
    const mp = req.body;
    console.log("mp es: ",mp);
    await client.query("SELECT pp.clave AS id, pp.fk_perfume AS perfume, pp.fk_presentacion AS Presentacion, pp.costo AS Costo FROM per_pre WHERE pp.fk_pre_presentacion = "+mp.presentacion+" AND pp.fk_perfume ="+mp.perfume)
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

minPreCtrl.createMinPre = async (req, res) => {
    const mp = req.body;
    await client.query("INSERT INTO per_pre (fk_perfume, fk_presentacion, costo) VALUES ("+mp.perfume+","+mp.presentacion+","+mp.costo+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

minPreCtrl.editMinPre = async (req, res) => {
    const id = req.params.id;
    const mp = req.body;
    await client.query("UPDATE per_pre SET fk_perfume ="+mp.perfume+", fk_presentacion ="+mp.presentacion+", costo ="+mp.costo+" WHERE clave ="+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

minPreCtrl.deleteMinPre = async (req, res) => {
    const id = req.params.id;
    await client.query("DELETE FROM per_pre WHERE clave = "+id)
        .then(response => {
            res.json('per_pre eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};


minPreCtrl.getMinPrese = async (req, res) => {
    await client.query("select p.nombre, pp.costo, pr.numero from per_pre pp, perfume p, presentacion pr where pp.fk_perfume = p.clave and pp.fk_presentacion = pr.clave")
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


module.exports = minPreCtrl;