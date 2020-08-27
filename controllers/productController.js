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
        let dataProduct;
        Product.findAll({

        })
            .then(hasil => {
                dataProduct = hasil
                return Customer.create({
                    name: req.body.name
                })
                    .then(data => {
                        let temp = []
                        let order = []
                        for (let i = 1; i < order_qty.length; i++) {
                            if (order_qty[i] > 0) {
                                temp.push(i + 1)
                                order.push(order_qty[i])
                                Sales.create({
                                    customerId: data.id,
                                    productId: i + 1,
                                    order_qty: order_qty[i]

                                })
                            }
                        }
                        console.log(temp, order)
                        res.render('cart', { temp, order, dataProduct })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })



        // res.redirect('/cart')
    }
}

module.exports = ProductController