
const router = require('express').Router();
const Controller = require('../controllers/userController')

router.get('/register', Controller.getRegister);
router.post('/register', Controller.postRegister);

router.get('/login', Controller.loginForm);
router.post('/login', Controller.login);

router.get('/logout', Controller.logout)

module.exports = router;