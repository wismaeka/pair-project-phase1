const { Product, Sales, Customer } = require('../models')

class ProductController {

    static showProduct(req, res) {
        Product.findAll()
            .then(data => {
                let user = req.session.user
                res.render('productShow', { data, user })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postAddProduct(req, res) {
        const { order_qty } = req.body
        console.log(req.body)
        Customer.create({
            name: req.body.name
        })
            .then(data => {
                for (let i = 0; i < order_qty.length; i++) {
                    if (order_qty[i] > 0) {

                        Sales.create({
                            customerId: data.id,
                            productId: i,
                            order_qty: order_qty[i]

                        })
                    }
                }
                res.redirect('/cart')
            })
            .catch(err => {
                res.send(err)
            })


        // res.redirect('/cart')
    }
}

module.exports = ProductController