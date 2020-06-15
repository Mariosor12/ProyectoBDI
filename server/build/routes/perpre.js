const express = require('express');
const router = express.Router();
const minPreCtrl = require('../controllers/perpreController');

router.get('/', minPreCtrl.getMinPresentaciones);
router.get('/', minPreCtrl.getMinPrese);
router.get('/perfume/:id', minPreCtrl.getMinPre);
router.get('/presentacion/:id', minPreCtrl.getPreMin);
router.post('/', minPreCtrl.createMinPre);
router.post('/mp', minPreCtrl.getMinPre2);
router.put('/:id', minPreCtrl.editMinPre);
router.delete('/:id', minPreCtrl.deleteMinPre);

module.exports = router;