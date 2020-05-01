const express = require('express');
const router = express.Router();
const ocCtrl = require('../controllers/ordenventaController');

router.get('/reservada', ocCtrl.getOrdenVentaReservada);
router.get('/ordenado', ocCtrl.getOrdenVentaOrdenada);
router.get('/cancelado', ocCtrl.getOrdenVentaCancelado);
router.get('/pagado', ocCtrl.getOrdenVentaPagado);
router.get('/aprobacion', ocCtrl.getOrdenVentaEspAprobacion);
router.get('/revision', ocCtrl.getOrdenVentaRevision);
router.get('/entregado', ocCtrl.getOrdenVentaEntregado);
router.post('/recibir/:id', ocCtrl.recibirVenta);
router.get('/', ocCtrl.getOrdenesVenta);
router.get('/:id', ocCtrl.getOrdenVenta);
router.get('/aliado/:id', ocCtrl.getOrdenesVentaAliado);
router.post('/', ocCtrl.createOrdenVenta);

module.exports = router;