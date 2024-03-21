const  { Router } = require('express');
const router = Router();

router.get('/api/usuario', (req, res)=> {
  res.status(200).json({mensaje: `Desde el get del usuario`});
});

router.post('/api/usuario', (req, res)=> {
  res.status(201).json({mensaje: `Desde el post del usuario`});
});

router.delete('/api/usuario', (req, res)=> {
  res.status(200).json({mensaje: `Desde el delete del usuario`});
});

module.exports = router;