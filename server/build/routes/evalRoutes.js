const express = require('express');
const router = express.Router();
const evaCtrl = require('../controllers/evalController');

router.get('/', evaCtrl.getEvaluacion);
router.get('/:productor', evaCtrl.getProveedorFiltro);
router.get('/:id', evaCtrl.getoneEvaluacion);
// router.post('/', evaCtrl.createEvaluacion);
router.post('/', evaCtrl.createCriterioEvaluacion);
router.put('/:id', evaCtrl.editEvaluacion);
router.delete('/:id', evaCtrl.deleteEvaluacion);

module.exports = router;