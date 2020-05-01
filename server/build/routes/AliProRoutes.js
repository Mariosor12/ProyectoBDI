const express = require('express');
const router = express.Router();
const aliproCtrl = require('../controllers/aliproController');

router.get('/:id', aliproCtrl.getAliProductos);
router.post('/', aliproCtrl.createAliProducto);
router.delete('/:id', aliproCtrl.deleteAliPro);

module.exports = router;