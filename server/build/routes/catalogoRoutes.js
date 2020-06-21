const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/catalogoController');

router.get('/', catCtrl.getCatalogos);
router.get('/:proveedor/:productor/:id', catCtrl.getCatalogo);
router.post('/', catCtrl.createCatalogo);
// router.delete('/:id', catCtrl.deleteCatalogo);
// router.get('/contrato/:id', catCtrl.getCon);

module.exports = router;