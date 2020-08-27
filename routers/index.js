const { Router } = require('express');
const route = require('express').Router()

const userRoute = require('./userRoute.js');
const productRoute = require('./productRoute.js');
const customerRoute = require('./customerRoute.js');
const Controller = require('../controllers/controller.js');

route.get('/', Controller.readAll);

route.use('/user', userRoute)
route.use('/product', productRoute)
route.use('/customer', customerRoute)



module.exports = route