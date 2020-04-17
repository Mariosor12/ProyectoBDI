const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/carritoController');

router.get('/', clCtrl.getCarrito);
router.get('/:id', clCtrl.getoneCarrito);
router.post('/', clCtrl.createCarrito);
router.put('/:id', clCtrl.editCarrito);
router.delete('/:id', clCtrl.deleteCarrito);

module.exports = router;