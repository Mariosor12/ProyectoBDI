const express = require('express');
const router = express.Router();
const pedidoCtrl = require('../controllers/pedidoController');

router.get('/ordencompra/:id', pedidoCtrl.getPedidosOC);
router.get('/', pedidoCtrl.getPedidos);
router.get('/:contrato', pedidoCtrl.getPedido);
router.get('/aceptado/:contrato', pedidoCtrl.getPedidoAceptado);
router.post('/', pedidoCtrl.createPedido);
router.post('/cant/', pedidoCtrl.createPedidoCant);
module.exports = router;
