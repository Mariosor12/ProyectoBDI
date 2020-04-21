const express = require('express');
const router = express.Router();
const rolpriCtrl = require('../controllers/rolpriController');

router.get('/', rolpriCtrl.getRolesPri);
router.get('/:id', rolpriCtrl.getRolPri);
router.get('/rol/:id', rolpriCtrl.getRolPriR);
router.get('/priv/:id', rolpriCtrl.getRolPriP);
router.post('/',rolpriCtrl.createRolPri);
router.delete('/:id/:id2', rolpriCtrl.deleteRolPri);
module.exports = router;