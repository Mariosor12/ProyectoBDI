const productoCtrl = {};
const pool  = require('../database/database');

productoCtrl.getProducto = async (req, res) => {
    await pool.query("select p.clave as id, p.nombre as nombre, tp.nombre as nombretp, p.descripcion as descripcion, p.fecha_nacimiento as fecha, p.genero as genero, pe.nombre as nombrepe, f.nombre as nombref, d.nombre as nombred from IMA_perfume p, IMA_fijador f, IMA_tipo_perfume tp, IMA_perfumista pe, IMA_direccion d where p.fk_fijador= f.clave and p.fk_tipo_perfume=tp.clave and p.fk_perfumista= pe.clave and pe.fk_direccion = d.clave;")
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

productoCtrl.getoneProducto = async (req, res) => {
    const id = req.params.id;
    await pool.query("select p.clave as id, p.nombre, tp.nombre, p.descripcion, p.genero, pe.nombre, d.nombre from IMA_perfume p, IMA_fijador f, IMA_tipo_perfume tp, IMA_perfumista pe, IMA_direccion d where p.fk_fijador= f.clave and p.fk_tipo_perfume=tp.clave and p.fk_perfumista= pe.clave and pe.fk_direccion = d.clave and p.clave = "+id+";")
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

productoCtrl.createProducto = async (req, res) => {
    const producto = req.body;
    await pool.query("INSERT INTO IMA_perfume (nombre, descripcion, fecha_nacimiento, genero, fk_fijador, fk_tipo_perfume, fk_perfumista) VALUES ('"+producto.nombre+"', '"+producto.descripcion+"', '"+producto.fecha_nacimiento+"', '"+producto.genero+"', "+producto.fk_fijador+", "+producto.fk_tipo_perfume+", "+producto.fk_perfumista+");")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

productoCtrl.editProducto = async (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    await pool.query("UPDATE IMA_perfume SET nombre = '"+producto.nombre+"',  descripcion = '"+producto.descripcion+"', fecha_nacimiento = '"+producto.fecha_nacimiento+"', genero = '"+producto.genero+"', fk_fijador = "+producto.fk_fijador+", fk_tipo_perfume = "+producto.fk_tipo_perfume+", fk_perfumista = "+producto.fk_perfumista+" WHERE clave = "+id+";")
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

productoCtrl.deleteProducto = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM IMA_perfume WHERE clave = "+id+";")
        .then(response => {
            res.json('Evento eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

productoCtrl.getPerfume = async (req, res) => {  // busca todas las presentaciones que tiene un perfume específico
    const id = req.params.id;
    await pool.query("select p.clave, p.nombre, pr.clave from IMA_perfume p, IMA_productor pr where  i.fk_proveedor = "+id+" AND p.fk_productor = pr.clave")
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
module.exports = productoCtrl;