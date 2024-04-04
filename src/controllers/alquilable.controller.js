const dataAlquilable = require('./data.json')
const {Alquilable} = require('../db/models')


const allAlquilables = async (req, res)=> {
  const datosRecuperados = await Alquilable.findAll({})
  res.status(200).json(datosRecuperados)
}

const crearAlquilable = async (req, res)=> {
  const data = req.body;
  const record = await Alquilable.create(data)
  res.status(201).json(record);
}

const findById = async (req, res) => { 
  const id = req.params.id;
  const alquilable = await Alquilable.findOne({where: {id: id, disponible:true}});
  if(alquilable)
    res.status(200).json(alquilable)
  else 
    res.status(404).json({error: `alquilable ${id} no encontrado.`});
}

const deleteByid = async( req, res) => {
  const id = req.params.id;
  const recordEliminado = await Alquilable.destroy({where: {id: id}});
    if(recordEliminado)
    res.status(200).json({message: `Se eliminaron ${recordEliminado} registros.`})
  else 
    res.status(404).json({error: `alquilable ${id} no encontrado.`});
}

const updateById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const record = await Alquilable.update(data, {where: {id: id}})
  if (record) {
    const alquilable = await Alquilable.findOne({where: {id: id}});
    res.status(200).json(alquilable);
  } else 
    res.status(404).json({error: `alquilable ${id} no encontrado.`});
}


const controller = {}
controller.allAlquilables = allAlquilables;
controller.crearAlquilable = crearAlquilable;
controller.findById = findById;
controller.deleteByid = deleteByid;
controller.updateById = updateById;

module.exports = controller