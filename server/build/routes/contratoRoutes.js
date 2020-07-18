const express = require('express');
const router = express.Router();
const conCtrl = require('../controllers/contratoController');

router.get('/', conCtrl.getContrato);
router.get('/c/', conCtrl.getContratoc);
router.get('/:id', conCtrl.getoneContrato);
router.get('/cond/:envio/:pago/:contrato', conCtrl.getoneContratoCond);
router.post('/', conCtrl.createContrato);
router.post('/condicion', conCtrl.createContratoCondicion);
router.put('/:id', conCtrl.editContrato);
router.delete('/:id', conCtrl.deleteContrato);

module.exports = router;