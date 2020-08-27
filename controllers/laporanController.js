const { Product, Sales, Customer } = require('../models')

class LaporanController {
    static viewLaporan(req, res) {
        let data;
        Product.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(productData => {
                data = productData
                return Sales.findAll()

            })
            .then(order => {
                let temp = []
                for (let i = 1; i < data.length; i++) {
                    for (let j = 0; j < order.length; j++) {
                        if (i === order[j].productId) {
                            temp.push(order[j].order_qty)
                        } else {
                            temp.push(0)
                        }

                    }
                }
                res.render('laporan', { data, order , temp})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static laporanProduct(req, res) {
        const id = req.params.id
        console.log(id)
        let data;
        Sales.findAll({
            where: { productId: id },
            include: [Product, Customer]
        })
            .then(result => {
                data = result
                return Product.findAll({
                    where: {
                        id : id
                    }
                })

            })
            .then(productData => {
                res.render('laporanProduct', { id, data, productData })
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = LaporanController