const express = require('express');
const router = express.Router();
const aliCtrl = require('../controllers/aliadoController');

router.get('/', aliCtrl.getAliados);
router.get('/:id', aliCtrl.getAliado);
router.post('/', aliCtrl.createAliado);
router.put('/:id', aliCtrl.editAliado);
router.delete('/:id', aliCtrl.deleteAliado);

module.exports = router;