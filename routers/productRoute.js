
const route = require('express').Router();
const ProductController = require('../controllers/productController.js');

route.get('/', ProductController.showProduct)
route.post('/add', ProductController.postAddProduct)

module.exports = route