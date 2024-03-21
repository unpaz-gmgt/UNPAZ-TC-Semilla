const  { Router } = require('express');
const { allAlquilables, crearAlquilable, findById } = require('../controllers/alquilable.controller')
const router = Router();

router.get('/api/alquilable', allAlquilables);
router.get('/api/alquilable/:id', findById);

router.post('/api/alquilable', crearAlquilable);

router.delete('/api/alquilable', (req, res)=> {
  res.status(200).json({mensaje: `Desde el delete del alquilable`});
});

module.exports = router;