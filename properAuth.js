
const express = require("express");
const app = express();

function userAuth(req,res,next){
    const user = req.headers.username;
    const pass = req.headers.password;
    if(user != 'ayush' || pass != 'ayush123'){
        res.status(400).json({
            msg : "invalid user or password"
        })
        return;
    }
    next();
}
function kidneyCheck(req,res,next){
    const kidney = req.query.kidney;
    if(kidney != 1 && kidney != 2){
        res.status(400).json({
            msg : "wrong inut"
        })
        return;
    }
    next();
}


//first we check userAuthentication ... if everything is fine .. check kidney
//if kidney is also fine ... go ahead.
app.get('/health',userAuth,kidneyCheck,function(req,res){
    res.status(200).send("kidney is fine")
})

app.listen(3000);