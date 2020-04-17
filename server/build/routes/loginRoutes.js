const express = require('express');
const router = express.Router();
const clCtrl = require('../controllers/loginController');

router.get('/:nombre/:contrasena', clCtrl.getoneUsuario);

module.exports = router;