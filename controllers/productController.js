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
        let user = req.session.user
        let customer = req.body.name
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
                        let hasil = 0
                        for (let i = 0; i< temp.length;i++) {
                            hasil += dataProduct[temp[i]-1].price
                        }
                        res.render('invoice', { temp, order, dataProduct ,user, customer, data, hasil})
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })



        // res.redirect('/cart')
    }
}

module.exports = ProductController