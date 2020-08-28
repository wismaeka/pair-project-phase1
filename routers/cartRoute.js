const route = require('express').Router();
const CustomerController = require('../controllers/customerController.js');
const cartController = require('../controllers/cartController.js');

route.get('/', cartController.cart)

module.exports = route