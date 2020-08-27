const { Product, Sales, Customer } = require('../models')
const QRCode = require('qrcode')

class cartController {
    static cart(req, res) {
        let user = req.session.user
       res.render('cart',{user})
    }
}

module.exports = cartController