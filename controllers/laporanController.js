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
                console.log(temp)
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
                if(data[0] === undefined) {
                    res.send('tes')
                } else {
                    res.render('laporanProduct', { id, data, productData })
                }
                
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = LaporanController