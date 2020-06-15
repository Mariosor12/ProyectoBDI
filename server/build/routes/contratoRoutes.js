const express = require('express');
const router = express.Router();
const conCtrl = require('../controllers/contratoController');

router.get('/', conCtrl.getContrato);
router.get('/:id', conCtrl.getoneContrato);
router.post('/', conCtrl.createContrato);
router.put('/:id', conCtrl.editContrato);
router.delete('/:id', conCtrl.deleteContrato);

module.exports = router;