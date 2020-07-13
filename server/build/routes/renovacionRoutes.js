const express = require('express');
const router = express.Router();
const renCtrl = require('../controllers/renovacionController');

router.get('/', renCtrl.getRenovacion);
router.get('/:id', renCtrl.getoneRenovacion);
router.post('/', renCtrl.createRenovacion);
router.put('/:id', renCtrl.editRenovacion);
router.delete('/:id', renCtrl.deleteRenovacion);

module.exports = router;