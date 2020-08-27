
const route = require('./routers')
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))
app.use('/', route)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
