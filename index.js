const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const modulo = require('./data')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res, next)=> {
    res.render('home',{
        modulo
    })
})

app.get('/cover', (req,res,next)=> {
    const data = modulo
    res.render('cover', {
        modulo
    })
})

app.listen(port, ()=> {
    console.log('Server Online')
})