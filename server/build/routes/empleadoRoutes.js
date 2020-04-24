const express = require('express');
const router = express.Router();
const empCtrl = require('../controllers/empleadoController');

router.get('/', empCtrl.getEmpleados);
router.get('/:id', empCtrl.getEmpleado);
router.post('/', empCtrl.createEmpleado);
router.put('/:id', empCtrl.editEmpleado);
router.delete('/:id', empCtrl.deleteEmpleado);

module.exports = router;