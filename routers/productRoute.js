
const route = require('express').Router();
const ProductionHouseController = require('../controllers/productionhouseController.js');

route.get('/', ProductController.showData)

module.exports = route