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
                return Sales.findAll({
                    order: [
                        ['id', 'ASC']
                    ]
                })

            })
            .then(order => {
                let temp = []
                console.log(data)
                let user = req.session.user
                for (let i = 1; i <= data.length; i++) {
                    for (let j = 0; j < order.length; j++) {
                        if (Number(i) == Number(order[j].productId)) {
                            console.log(data[i])
                            temp.push(Number(order[j].order_qty))
                        } else {
                            temp.push(0)
                        }

                    }
                }
                res.render('laporan', { data, order , temp,user})
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
                let user = req.session.user
                res.render('laporanProduct', { id, data, productData,user})
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = LaporanController