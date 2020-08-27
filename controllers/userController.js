const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {

    static getRegister(req, res) {
        let error = req.app.locals.message
        delete req.app.locals.message
        res.render("register", { error })
    }

    static postRegister(req, res) {
        let { name, username, password } = req.body
        let input = { name, username, password }
        User.findAll()
            .then(data => {
                if (data.length < 1) {
                    User.create(input)
                        .then(data => {
                            res.redirect('/users/login')
                        })
                        .catch(err => {
                            res.send(err)
                        })
                } else {
                    data.forEach(el => {
                        if (el.username === username) {
                            req.app.locals.err = `Username is no available, please try another one!`
                            throw new Error()
                        } else {
                            User.create(input)
                                .then(data => {
                                    res.redirect('/users/login')
                                })
                                .catch(err => {

                                    if (err.name === 'SequelizeValidationError') {
                                        if (err.errors.length > 0) {
                                            let errors = err.errors.map(error => {
                                                return error.message
                                            })
                                            req.app.locals.message = errors
                                        }
                                        res.redirect('/users/register')
                                    } else {
                                        console.log(err)
                                        res.send(err)
                                    }
                                })
                        }
                    });
                }
            })
            .catch(err => {
                let arr = []
                let error = req.app.locals.err
                arr.push(error)
                delete req.app.locals.err
                res.render('register', { error: arr })
            })
    }

    static loginForm(req, res) {
        let err = req.app.locals.errors
        delete req.app.locals.errors
        res.render('login', { err })
    }

    static login(req, res) {
        let { username, password } = req.body
        User.findAll({
            where: {
                username: username
            }
        })
            .then(data => {
                if (data.length > 0) {
                    let output = bcrypt.compareSync(password, data[0].password);
                    if (output) {
                        req.session.user = data[0].name
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

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/')
            }
        })
    }
}

module.exports = UserController