const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/eventoController');

router.get('/', clCtrl.getEvento);
router.get('/:id', clCtrl.getoneEvento);
router.post('/', clCtrl.createEvento);
router.put('/:id', clCtrl.editEvento);
router.delete('/:id', clCtrl.deleteEvento);

module.exports = router;