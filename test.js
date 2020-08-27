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

Sales.findAll({
    where: { productId: 5 },
    include: [Product, Customer]
})
    .then(result => {
        data = result
        return Product.findAll({
            where: {
                id : 5
            }
        })

    })
    .then(productData => {
        console.log(data[0].order_qty)
    })
    .catch(err => {
        console.log(err)
    })