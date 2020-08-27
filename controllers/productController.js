const {Product} = require('../models')

class ProductController{

    static showProduct(req,res){
        Product.findAll()
        .then(data=>{
          let user = req.session.user
          console.log(user,"<<<<user")
            res.render('productShow',{data,user})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static postAddProduct(req,res){

    }
}


/**

 *     <div class="card-deck">
        
        <div class="card">
          <img class="img-thumbnail" width="200" height="100" src="<%=el.product_image %>" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><%= el.name %></h5>
            <p class="card-text"> Stock <br>
                <%= el.stock %></p> <br>
            <p class="card-text">Rp.<%= el.price %></p>
            <button type="button" class="btn btn-success">Buy</button>
          </div>
        </div>

        
      </div>

 */

module.exports = ProductController