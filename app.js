

const express = require('express');
const route = require('./routers')
const session = require('express-session')
const autehnticationMiddleware = require('./middlewares/authenticationMiddleware.js');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret : 'pair-project-wisma-agata',
    resave : false,
    saveUninitialized : true
}))
app.use(express.static('public'))
app.use('/', route)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
