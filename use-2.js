//1. print1 will run for any route and any method starting with "/first"
//2. will run even for '/first/anything'
//3. for get('/first/ayush') --> print1 will run then the main get method.


const express = require("express");
const app = express();

function print1(req,res,next){
    console.log("first middleware will rum for every method");
    next()
}

app.use('/first',print1);

app.get('/first/ayush',(req,res) => {
    res.send('hi i am ayush')
})
app.get('/first/gupta',(req,res) => {
    res.send('hi i am gupta')
})
app.listen(3000)