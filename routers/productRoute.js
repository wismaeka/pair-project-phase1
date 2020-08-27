
const route = require('express').Router();
const ProductController = require('../controllers/productController.js');

route.get('/', ProductController.showProduct)

module.exports = route