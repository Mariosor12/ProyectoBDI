const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/usuarioController');

router.get('/', clCtrl.getUsuarios);
router.get('/:id', clCtrl.getoneUsuario);
router.post('/', clCtrl.createUsuario);
router.put('/:id', clCtrl.editUsuario);
router.delete('/:id', clCtrl.deleteUsuario);

module.exports = router;