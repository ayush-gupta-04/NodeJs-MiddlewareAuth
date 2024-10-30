//app.use() --> 
//1. print1 will run for every route starting with '/first'
//   ex. --> /first/dsknaxz/sadfk  --> it will run even for this route.


const express = require("express");
const app = express();

function print1(req,res,next){
    console.log("first middleware will rum for every method");
    res.send('use')
}

app.use('/first',print1);
app.listen(3000);