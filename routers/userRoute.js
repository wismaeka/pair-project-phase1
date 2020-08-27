
const router = require('express').Router();
const Controller = require('../controllers/userController')

router.get('/register', Controller.getRegister);
router.post('/register', Controller.postRegister);

router.get('/login', Controller.loginForm);
router.post('/login', Controller.login);

router.get('/logout', Controller.logout)
// function checkLogin(req, res, next){
//     if(req.session.username){
//         next();
//     } else {
//         res.send('Please login to continue');
//     }
// }
// router.use(checkLogin);
// router.get('/:username', Controller.showHistory);
// router.get('/:username/:BookId', Controller.borrow);
// router.get('/:username/:id/return', Controller.returnForm);
// router.post('/:username/:id/return', Controller.return);


module.exports = router;