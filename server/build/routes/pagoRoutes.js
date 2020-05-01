const express = require('express');
const router = express.Router();
const pagoCtrl = require('../controllers/pagoController');

router.get('/ordencompra/:id', pagoCtrl.getPagosOC);
router.post('/', pagoCtrl.createPago);

module.exports = router;