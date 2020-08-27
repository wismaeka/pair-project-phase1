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
                //console.log(data,"<<<data")
                // kalo username dan pass blm ada di database blm di handle
                // if (data) { //kalo username ada di database
                //console.log(password, data[0].password, "passss>>>>>>>")
                    let output = bcrypt.compareSync(password, data[0].password);
                    console.log(output,"<<<output")
                    if (output) {
                        console.log("here")
                        res.redirect('/product')
                    } else {
                        req.app.loacls.errors = `Username atau Password Salah`
                        console.log("im here")
                        res.redirect('/users/login')
                       
                    }
                // } 
                // else {
                //     req.app.loacls.errors = `Username atau Password Salah`
                //     res.redirect('/users/login')
                // }

            })
            .catch(err => {
                // console.log("err,login")
                // res.send(err)
            })
    }
}

module.exports = UserController