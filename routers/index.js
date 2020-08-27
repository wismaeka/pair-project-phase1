const router = require('express').Router()
const autheticationMiddleware = require('../middlewares/authenticationMiddleware.js');
const userRoute = require('./userRoute.js');
const productRoute = require('./productRoute.js');
const customerRoute = require('./customerRoute.js');
const salesRoute = require('./salesRoute.js');
const laporanRoute = require('./laporanRoute')
const Controller = require('../controllers/controller.js');


router.get('/', Controller.home)
router.use('/users', userRoute)

router.use(autheticationMiddleware)

router.use('/laporan', laporanRoute)


router.use('/product', productRoute)
router.use('/customer', customerRoute)
router.use('/sales', salesRoute)



module.exports = router