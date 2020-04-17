const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/productoController');

router.get('/', clCtrl.getProducto);
router.get('/:id', clCtrl.getoneProducto);
router.post('/', clCtrl.createProducto);
router.put('/:id', clCtrl.editProducto);
router.delete('/:id', clCtrl.deleteProducto);

module.exports = router;