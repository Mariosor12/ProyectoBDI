const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/catalogoController');

router.get('/', catCtrl.getCatalogos);
router.get('/:proveedor/:productor/:id', catCtrl.getCatalogo);
router.get('/otro/:proveedor/:productor/:id', catCtrl.getCatalogoO);
router.get('/:productor', catCtrl.getPerfumeP);
router.get('/ingre/:proveedor', catCtrl.getIngreP);
router.get('/ingremat/:proveedor', catCtrl.getIngMateriaP);
// router.get('/', catCtrl.getRecomendador);
router.post('/', catCtrl.createCatalogo);
// router.post('/otro', catCtrl.createCatalogoO);
// router.delete('/:id', catCtrl.deleteCatalogo);
// router.get('/contrato/:id', catCtrl.getCon);

module.exports = router;