const { Product, Sales, Customer } = require('../models')

class LaporanController {
    static viewLaporan(req, res) {
        Product.findAll()
            .then(data => {
                res.render('laporan', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = LaporanController