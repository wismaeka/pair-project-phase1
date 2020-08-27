const { Product, Sales, Customer } = require('./models')
const QRCode = require('qrcode')


// var barcode = require('barcode');
// var code39 = barcode('code39', {
//     data: "it works",
//     width: 400,
//     height: 100,
// });
// // or with jQuery
// code39.getBase64(function (err, imgsrc) {
//     if (err) throw err;

//     // if we're using HTTP or another framework
//     res.render('<img src="' + imgsrc + '">');
// });


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

// Sales.findAll({
//     where: { productId: 5 },
//     include: [Product, Customer]
// })
//     .then(result => {
//         data = result
//         return Product.findAll({
//             where: {
//                 id : 5
//             }
//         })

//     })
//     .then(productData => {
//         console.log(data[0].Customer.createdAt)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Customer.create({
//     name: "agat"
// })
// .then(data => {
//     console.log(data.id)
// })
// .catch(err => {
//     console.log(err)
// })

// QRCode.toDataURL('I am a pony!', function (err, url) {
//     console.log(url)
//   })

// Product.findAll({
//     order: [
//         ['id', 'ASC']
//     ]
// })
// .then(data => {
//     console.log(data.length)
// })
// .catch(err => {
//     console.log(err)
// })

let data;
Sales.findAll({
    where: { productId: 5 },
    include: [Product, Customer]
})
    .then(result => {
        data = result
        return Product.findAll({
            where: {
                id: 4
            }
        })

    })
    .then(productData => {
        console.log(data[0])
    })
    .catch(err => {
        res.send(err)
    })