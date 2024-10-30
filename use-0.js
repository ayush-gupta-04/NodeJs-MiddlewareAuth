//app.use() --> 
//1. print1 will run for any random route and every method.
//2. if the route & method running in the server ... then --> print1 will run first
//                                                            that particular route & method get hit.


const express = require("express");
const app = express();

function print1(req,res,next){
    console.log("first middleware will rum for every method");
    next();
}

app.use(print1);
app.listen(3000)