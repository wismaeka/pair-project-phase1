const {Product} = require('../models')

class ProductController{

    static showProduct(req,res){
        Product.findAll()
        .then(data=>{
          let user = req.session.user
            res.render('productShow',{data,user})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static postAddProduct(req,res){

    }
}

module.exports = ProductController