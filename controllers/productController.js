const {Product} = require('../models')

class ProductController{

    static showProduct(req,res){
        Product.findAll()
        .then(data=>{
            res.render('productShow',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ProductController