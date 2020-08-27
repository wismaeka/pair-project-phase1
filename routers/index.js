const { Router } = require('express');
const router = require('express').Router()

const userRoute = require('./userRoute.js');
const productRoute = require('./productRoute.js');
const customerRoute = require('./customerRoute.js');
const salesRoute = require('./salesRoute.js');
const Controller = require('../controllers/controller.js');

router.get('/', Controller.home)

// route.use('/user', userRoute)
// route.use('/product', productRoute)
// route.use('/customer', customerRoute)
// route.use('/sales', salesRoute)



module.exports = router