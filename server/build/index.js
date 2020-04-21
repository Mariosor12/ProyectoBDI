const express = require('express');
const morgan = require('morgan');

const routesEvento = require('./routes/eventoRoutes');
const routesLogin = require('./routes/loginRoutes');
const routesUser = require('./routes/userRoutes');
const routesProducto = require('./routes/productoRoutes');
const routesPedido = require('./routes/pedidoRoutes');
//const routesTipoPago = require('./routes/tipopagoRoutes');
const routesRol = require('./routes/rolRoutes');
const routesPrivilegio = require('./routes/privilegioRoutes');
const routesRolPri = require('./routes/rolpriRoutes');

const cors = require('cors');
//----------initializations-----------------
const app = express();
//---------settings-------------------------
app.set('port', process.env.PORT || 3000);

//-------------middlewares---------------------
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin : '*'}));


//-------------routes----------------------
app.use('/api/evento',routesEvento);
app.use('/api/login', routesLogin);
app.use('/api/usuario', routesUser);
app.use('/api/producto', routesProducto);
app.use('/api/carrito', routesPedido);
//app.use('/api/tipopago',routesTipoPago);
app.use('/api/rol', routesRol);
app.use('/api/privilegio', routesPrivilegio);
app.use('/api/rolpri', routesRolPri);
//----------------starting the server----------------------
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});