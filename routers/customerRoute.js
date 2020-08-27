
const route = require('express').Router();
const ProductionHouseController = require('../controllers/productionhouseController.js');

route.get('/', Customer.showData)

module.exports = route