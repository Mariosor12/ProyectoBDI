const express = require('express');
const router = express.Router();
const recoCtrl = require('../controllers/recomendadorController');

router.get('/', recoCtrl.getRecomendador);
router.get('/:palabra', recoCtrl.getOneRecomendador);
router.post('/', recoCtrl.createRecomendador);
router.put('/:id', recoCtrl.editRecomendador);
router.delete('/:id', recoCtrl.deleteRecomendador);

module.exports = router;