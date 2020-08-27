const LaporanController = require('../controllers/laporanController');
const route = require('express').Router();

route.get('/', LaporanController.viewLaporan)
route.get('/:id', LaporanController.laporanProduct)

module.exports = route