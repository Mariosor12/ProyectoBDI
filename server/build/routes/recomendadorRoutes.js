const express = require('express');
const router = express.Router();
const recoCtrl = require('../controllers/recomendadorController');

router.get('/', recoCtrl.getRecomendador);
router.get('/pergen', recoCtrl.getRecomendadorPerGen);
router.get('/perint', recoCtrl.getRecomendadorPerInt);
router.get('/percar', recoCtrl.getRecomendadorPerCar);
router.get('/perfam', recoCtrl.getRecomendadorPerFam);
router.get('/peroca', recoCtrl.getRecomendadorPerOca);
router.get('/perper', recoCtrl.getRecomendadorPerPer);
router.get('/per/:palabra', recoCtrl.getOneRecomendador);
router.post('/', recoCtrl.createRecomendador);
router.put('/:id', recoCtrl.editRecomendador);
router.delete('/:id', recoCtrl.deleteRecomendador);

module.exports = router;