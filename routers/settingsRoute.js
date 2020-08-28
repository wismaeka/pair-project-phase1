const route = require('express').Router();
const settingsController = require('../controllers/settingsController.js');

route.get('/', settingsController.viewAll)
route.get('/edit/:id', settingsController.getEdit)
route.post('/edit/:id', settingsController.postEdit)
route.get('/delete/:id', settingsController.delete)

module.exports = route