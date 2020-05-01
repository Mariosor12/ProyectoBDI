const express = require('express');
const router = express.Router();
const pedidoCtrl = require('../controllers/pedidoController');

router.get('/ordencompra/:id', pedidoCtrl.getPedidosOC);
router.get('/', pedidoCtrl.getPedidos);
router.get('/:id', pedidoCtrl.getPedido);
router.post('/', pedidoCtrl.createPedido);
module.exports = router;
