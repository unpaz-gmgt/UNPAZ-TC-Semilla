const  { Router } = require('express');
const router = Router();

router.get('/api/reserva', (req, res)=> {
  res.status(200).json({mensaje: `Desde el get del reseva`});
});

router.post('/api/reserva', (req, res)=> {
  res.status(201).json({mensaje: `Desde el post del reserva`});
});

router.delete('/api/reserva', (req, res)=> {
  res.status(200).json({mensaje: `Desde el delete del reserva`});
});

module.exports = router;