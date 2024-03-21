const { Router } = require('express');
const alquilabeRoute = require('./alquilable.route');
const reservaRoute = require('./reservas.route');
const usuariosRoute = require('./usuarios.routes')

const route = Router();

route.use(alquilabeRoute);
route.use(reservaRoute);
route.use(usuariosRoute);

module.exports = route;
