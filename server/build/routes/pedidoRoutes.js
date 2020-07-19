const express = require('express');
const router = express.Router();
const pedidoCtrl = require('../controllers/pedidoController');

router.get('/ordencompra/:id', pedidoCtrl.getPedidosOC);
router.get('/', pedidoCtrl.getPedidos);
router.get('/:contrato', pedidoCtrl.getPedido);
router.get('/:cond/:pago/:proveedor', pedidoCtrl.getPedidoCantidad);
router.get('/aceptado/:contrato', pedidoCtrl.getPedidoAceptado);
router.put('/:clave', pedidoCtrl.editPedido);
router.post('/', pedidoCtrl.createPedido);
router.post('/def/', pedidoCtrl.createPedidoDef);
router.post('/cant/', pedidoCtrl.createPedidoCant);
module.exports = router;
