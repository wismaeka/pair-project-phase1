const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {

    static getRegister(req, res) {
        res.render("register")
    }

    static postRegister(req, res) {
        let { name, username, password } = req.body
        let input = { name, username, password }
        //console.log(input)

        User.create(input)
            .then(data => {
                res.redirect('/users/login')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginForm(req, res) {
        let err = req.app.locals.errors
        delete req.app.locals.errors
        res.render('login',{err})
    }

    static login(req, res) {
        let { username, password } = req.body
        //let input = {username,password} 
        User.findAll({
            where: {
                username: username
            }
        })
            .then(data => {
                // kalo username dan pass blm ada di database blm di handle
                if (data.length > 0) { //kalo username ada di database
                    let output = bcrypt.compareSync(password, data[0].password);
                    if (output) {
                        req.session.user = data.username
                        console.log(req.session.user,"<<<userrcontroller")
                        console.log(data.username,"<<<datausername")
                        res.redirect('/product')
                    } else {
                        req.app.locals.errors = `Username atau Password Salah`
                        res.redirect('/users/login')
                       
                    }
                } 
                else {
                    req.app.locals.errors = `Username atau Password Salah`
                    res.redirect('/users/login')
                }

            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = UserController