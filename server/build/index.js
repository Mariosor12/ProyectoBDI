const express = require('express');
const morgan = require('morgan');

const routesEvento = require('./routes/eventoRoutes');
const routesLogin = require('./routes/loginRoutes');
const routesUser = require('./routes/userRoutes');
const routesProducto = require('./routes/productoRoutes');
const routesPedido = require('./routes/pedidoRoutes');
const routesTipoPago = require('./routes/tipopagoRoutes');
const routesRol = require('./routes/rolRoutes');
const routesPrivilegio = require('./routes/privilegioRoutes');
const routesRolPri = require('./routes/rolpriRoutes');
const routesEmpleado = require('./routes/empleadoRoutes');
const routesOrdenVenta = require('./routes/ordenventaRoutes');
const routesOrdenCompra = require('./routes/ordencompraRoutes');
const routesPago = require('./routes/pagoRoutes');
const routesAliado = require('./routes/aliadoRoutes');
const routesAliPro = require('./routes/AliProRoutes');
const routesReport = require('./routes/reporteRoutes');
const routesCliente = require('./routes/clienteRoutes');
const routesLugar = require('./routes/lugarRoutes');


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
app.use('/api/tipopago',routesTipoPago);
app.use('/api/rol', routesRol);
app.use('/api/privilegio', routesPrivilegio);
app.use('/api/rolpri', routesRolPri);
app.use('/api/empleado', routesEmpleado);
app.use('/api/ordenventa', routesOrdenVenta);
app.use('/api/ordencompra', routesOrdenCompra);
app.use('/api/pago', routesPago);
app.use('/api/aliado', routesAliado)
app.use('/api/alipro',routesAliPro);
app.use('/api/cliente', routesCliente);
app.use('/api/reporte',routesReport);
app.use('/api/lugar', routesLugar);
//----------------starting the server----------------------
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});