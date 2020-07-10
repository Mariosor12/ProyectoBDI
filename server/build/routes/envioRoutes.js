const express = require('express');
const router = express.Router();
const enCtrl = require('../controllers/envioController');

router.get('/', enCtrl.getEnvio);
router.get('/:id', enCtrl.getoneEnvio);
router.get('/cond/:proveedor', enCtrl.getCondProv);
router.post('/', enCtrl.createEnvio);
router.put('/:id', enCtrl.editEnvio);
router.delete('/:id', enCtrl.deleteEnvio);

module.exports = router;