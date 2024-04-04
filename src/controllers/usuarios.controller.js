const {User} = require('../db/models')
const allUsuarios = async ( req, res) => {
   const data = await User.findAll({})
   res.status(200).json(data)
}

const controller = {}
controller.allUsuarios = allUsuarios;
module.exports = controller;