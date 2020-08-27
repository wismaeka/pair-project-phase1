
const autehnticationMiddleware = (req,res,next)=>{
   if (req.session.user) {
      next()
   } else {
      req.app.locals.errors = `Only Authorized User Allowed!`
      res.redirect('/users/login')
   }
  
}

module.exports = autehnticationMiddleware;