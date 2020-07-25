const express = require('express');
const router = express.Router();
const evaCtrl = require('../controllers/evalController');

router.get('/', evaCtrl.getEvaluacion);
router.get('/final', evaCtrl.getEvaluacionFinal);
router.get('/f', evaCtrl.getProveedorFiltro);
router.get('/filtro/:productor', evaCtrl.getProveedorFiltro2);
router.get('/:id', evaCtrl.getoneEvaluacion);
router.get('/condipago/:proveedor', evaCtrl.getPagoProv);
// router.post('/', evaCtrl.createEvaluacion);
router.post('/', evaCtrl.createCriterioEvaluacion);
router.post('/resultado/', evaCtrl.createResultado);
router.put('/:id', evaCtrl.editEvaluacion);
router.delete('/:id', evaCtrl.deleteEvaluacion);

module.exports = router;