const dataAlquilable = require('./data.json')

const allAlquilables = (req, res)=> {
  setTimeout(()=>{
    res.status(200).json(dataAlquilable)
  }, 2000)
  
}

const crearAlquilable = (req, res)=> {
  const data = req.body;
  const maxID = dataAlquilable.reduce( (acum, ele)=> acum >= ele.id ? acum : ele.id, 0 ) + 1;
  dataAlquilable.push ( {id:maxID, ...data});
  res.status(201).json(dataAlquilable[dataAlquilable.length -1]);
}

const findById = (req, res)=> { 
  const id = req.params.id;
  const alquilable = dataAlquilable.find( a => a.id==id);
  if(alquilable)
    res.status(200).json(alquilable)
  else 
    res.status(404).json({error: `alquilable ${id} no encontrado.`});
}



module.exports = { allAlquilables, crearAlquilable, findById }