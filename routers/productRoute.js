
const route = require('express').Router();
const ProductController = require('../controllers/productController.js');

route.get('/', ProductController.showProduct)
route.post('/', ProductController.postAddProduct)

module.exports = route