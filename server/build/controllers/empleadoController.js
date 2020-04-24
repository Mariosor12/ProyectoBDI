const empCtrl = {};
const pool = require('../database/database');

empCtrl.getEmpleados = async (req, res) => {
    await pool.query("SELECT clave AS id, nombre, apellido, ci, salario, cargo, genero, fk_direccion AS Lugar FROM personal")
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

empCtrl.getEmpleado = async (req, res) => {
    const id = req.params.id;
    await pool.query("SELECT clave AS id, nombre, apellido, ci, salario, cargo, genero, fk_direccion AS Lugar FROM personal WHERE clave = "+id)
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

empCtrl.createEmpleado = async (req, res) => {
    const emp = req.body;
    await pool.query("INSERT INTO personal (nombre, apellido, ci, salario, cargo, genero, fk_direccion) VALUES ('"+emp.nombre+"','"+emp.apellido+"', "+emp.ci+", "+emp.salario+",'"+emp.cargo+"','"+emp.genero+"', "+emp.lugar+")")
        .then(response => {
            res.json('Insertado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

empCtrl.editEmpleado = async (req, res) => {
    const id = req.params.id;
    const emp = req.body;
    await pool.query("UPDATE personal SET nombre = '"+emp.nombre+"', apellido = '"+emp.apellido+"', ci = "+emp.ci+", salario = "+emp.salario+", cargo = '"+emp.cargo+"', genero = '"+emp.genero+"', fk_direccion = "+emp.lugar+" WHERE clave = "+id)
        .then(response => {
            res.json('Actualizado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

empCtrl.deleteEmpleado = async (req, res) => {
    const id = req.params.id;
    await pool.query("DELETE FROM personal WHERE clave = "+id)
        .then(response => {
            res.json('Empleado Eliminado');
        })
        .catch(err => {
            console.log(err);
            res.json('Ha ocurrido un error');
        })
};

module.exports = empCtrl;