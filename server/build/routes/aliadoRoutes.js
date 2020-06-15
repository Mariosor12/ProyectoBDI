const express = require('express');
const router = express.Router();
const aliCtrl = require('../controllers/aliadoController');

router.get('/', aliCtrl.getAliadosPro);
router.get('/:id', aliCtrl.getAliadoPro);
router.post('/', aliCtrl.createAliadoPro);
router.put('/:id', aliCtrl.editAliadoPro);
router.delete('/:id', aliCtrl.deleteAliadoPro);

module.exports = router;