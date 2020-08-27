const { Product, Sales, Customer } = require('../models')
const QRCode = require('qrcode')

class cartController {
    static cart(req, res) {
       res.render('cart')
    }
}

module.exports = cartController