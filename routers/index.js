const route = require('express').Router()

const userRoute = require('./userRoute.js');
const productRoute = require('./productRoute.js');
const customerRoute = require('./customerRoute.js');
const salesRoute = require('./salesRoute.js');
const laporanRoute = require('./laporanRoute')
const Controller = require('../controllers/controller.js');

route.get('/', Controller.home)

route.use('/laporan', laporanRoute)

// route.use('/user', userRoute)
// route.use('/product', productRoute)
// route.use('/customer', customerRoute)
// route.use('/sales', salesRoute)



module.exports = route