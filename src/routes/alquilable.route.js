const  { Router } = require('express');
const controller = require('../controllers/alquilable.controller')
const router = Router();

router.get('/api/alquilable', controller.allAlquilables);
router.get('/api/alquilable/:id', controller.findById);
router.post('/api/alquilable', controller.crearAlquilable);
router.delete('/api/alquilable/:id', controller.deleteByid);
router.put('/api/alquilable/:id', controller.updateById);


module.exports = router;