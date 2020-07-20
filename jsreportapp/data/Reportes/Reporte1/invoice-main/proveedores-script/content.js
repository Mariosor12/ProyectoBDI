const { Pool } = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'admin',
    port: 5432,
};

const pool = new Pool(connectionData)

pool.connect()
    .then(response => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log('DB is not connected :c');
        // client.end();
    })
pool.connect()



const axios = require('axios')
// async function beforeRender(req, res, rep) {
// res =  axios.get('http://localhost:3000/api/reporte/1/NEA', {
//   template: { shortid: 'H1xNbKX9FL' } ,
// data: res.data
// },  {
//   'headers': {
//     'Content-Type': 'application/json'
//   }
// })
// }
 
//  beforeRender = async(req, res) => {
//   let query = ("((select pr.clave as id, pr.nombre as razon, pr.pag_web as pagina, pr.telefono as telefono, d.nombre as nombred, ing.nombre as nombrei, p.volml as vol, p.precio_unitario as precio from presing p, ing_materia_esencial ing, proveedor pr, direccion d where p.fk_ing_materia_esencial = ing.ipc and ing.fk_proveedor = pr.clave and pr.fk_direccion = d.clave and pr.nombre = 'NEA') union (select pr.clave as id, pr.nombre as razon, pr.pag_web as pagina, pr.telefono as telefono, d.nombre as nombred, i.nombre as nombrei, p.volml as vol, p.precio_unitario as precio from presing p, ingrediente_otro i, proveedor pr, direccion d where p.fk_ing_materia_esencial = i.ipc and i.fk_proveedor = pr.clave and pr.fk_direccion = d.clave and pr.nombre = 'NEA' order by i.nombre, p.precio_unitario asc))")
 
// pool.query(query, (err, result) => {
//     req.data = {
//       rows: result.rows
//     };
//     pool.end();
//     done();
//   });
        
//   };


// async function beforeRender(req, res) {
//     // res.json =  [req, res];
//     rep = await axios.get('http://localhost:3000/api/reporte/1/KFFA') , {
//         data: rep.data
//     }
//     console.log(rep)
//     // axios.response
//     // data = rep.data,
//     // data = rep;
//     // .then(response => {
//     //         if(response.rowCount)
//     //             (rep),
//     //             console.log(rep);
//     //         else
//     //             ('Sin resultados');
//     //     })
//     //     .catch(err => {
//     //         console.log(err);
//     //         ('Ha ocurrido un error');
//     //     })
// }

