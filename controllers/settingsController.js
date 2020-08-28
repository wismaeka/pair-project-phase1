const { User } = require('../models')


class settingsController {
    static viewAll(req, res) {
        let user = req.session.user
        User.findAll({
            order:[
                ["id","ASC"]
            ]
        })
        .then(data=>{
           
            res.render('settings',{data,user})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static getEdit(req, res){
        let id = +req.params.id
        User.findAll({
            where: {
                id : id
            },
           
        })
        .then(data=>{
            res.render('settingEdit', {data, error: []})
        })
        .catch(err=>{
            res.send(err)
        })
       
    }


    static postEdit(req, res){
        let {name, username} = req.body
        let input = {name, username} 
        User.update(input, {
            where: {
                id: +req.params.id
            }
        })
        .then(data =>{
            res.redirect('/settings')
        })
        .catch(err =>{
            res.send(err)
        })
        console.log(req.body, "<<<<<")
    }


    static delete(req,res){
        User.destroy({
            where: {
                id : +req.params.id
            }
        })
        .then(data =>{
            res.redirect('/settings')
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = settingsController