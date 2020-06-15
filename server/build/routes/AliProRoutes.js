const express = require('express');
const router = express.Router();
const aliproCtrl = require('../controllers/aliproController');

router.get('/:id', aliproCtrl.getAliProductos);
router.post('/', aliproCtrl.createAliProducto);
router.delete('/:id', aliproCtrl.deleteAliPro);
router.get('/', aliproCtrl.getAliadosProv);
router.get('/:id', aliproCtrl.getAliadoProv);
router.post('/', aliproCtrl.createAliadoProv);
router.put('/:id', aliproCtrl.editAliadoProv);
router.delete('/:id', aliproCtrl.deleteAliadoProv);
router.get('/', aliproCtrl.getIngredientes);
router.get('/aliado/:id', aliproCtrl.getIngre);

module.exports = router;