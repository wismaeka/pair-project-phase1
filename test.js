const { Product, Sales, Customer } = require('./models')

// const id = req.params.id
// Sales.findAll({
//  where: { productId : 5},
//  include: [Product,Customer]
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })

Product.findAll({
    order:[
        ['id','ASC']
    ]
})
    .then(productData => {
        data = productData
        return Sales.findAll()
        
    })
    .then(order => {
        let temp =[]
        for (let i = 1 ; i < data.length;i++) {
            for (let j = 0 ; j < order.length; j++){
                if (i === order[j].productId){
                    console.log(i)
                    temp.push(order[j].order_qty)
                }else{
                    temp.push(0)
                }
                
            }
        }
        console.log(temp)
    })
    .catch(err => {
        res.send(err)
    })