const express = require('express');
const router = express.Router();
const ovCtrl = require('../controllers/ordencompraController');

router.get('/reservada', ovCtrl.getOrdenCompraReservada);
router.get('/ordenado', ovCtrl.getOrdenCompraOrdenada);
router.get('/cancelado', ovCtrl.getOrdenCompraCancelado);
router.get('/pagado', ovCtrl.getOrdenCompraPagado);
router.get('/aprobacion', ovCtrl.getOrdenCompraEspAprobacion);
router.get('/revision', ovCtrl.getOrdenCompraRevision);
router.get('/entregado', ovCtrl.getOrdenCompraEntregado);
router.post('/recibir/:id', ovCtrl.recibirCompra);
router.get('/', ovCtrl.getOrdenesCompra);
router.get('/:id', ovCtrl.getOrdenCompra);
router.get('/aliado/:id', ovCtrl.getOrdenesCompraAliado);
router.post('/', ovCtrl.createOrdenCompra);

module.exports = router;