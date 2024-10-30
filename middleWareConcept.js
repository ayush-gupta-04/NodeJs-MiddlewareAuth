const express = require("express");
const app = express();


//1. we can have multiple functions like this.
//2. every function must contain req...res....next.
//3. control will reach func1 --> if func1 call next only then control will move to func2.
//4. same goes for further functions.


function func1(req,res,next){
    //do some logic.
    //if everything is fine here.
    //call func2.
    next();
}
function func2(req,res,next){
    
}
function func3(req,res,next){
    
}
function func4(req,res){
    
}

app.get('/health',func1,func2,func3,func4)
app.listen(3000);