const path = require('path')
const express = require('express');
const app = express()

const puclidir = path.join(__dirname,'./public')
console.log(puclidir)
//app.use(express.static(puclidir))
app.set('view engine','hbs')
app.get('',(req,resp)=>{
resp.render('index',{'name':'bharat'});
})
app.get('/help',(req,resp)=>{
    resp.send('help page')
})
app.get('/about',(req,resp)=>{
    resp.send('about page')
})
app.get('/contact',(req,resp)=>{
    resp.send('contact us')
})
app.get('/val',(req,resp)=>{
    let a={'bharat':'bharat'}
    resp.send(a)
})
app.listen(5000,()=>{
    console.log('server is up on port 5000')
})
