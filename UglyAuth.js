//sending kidneyId ... username ... pass in the query params.
//authentication doing in an ugly way.

const express = require("express");
const app = express();


app.get('/health',function(req,res){
    const kidney = req.query.kidney;
    console.log(kidney);
    const user = req.headers.username;
    const pass = req.headers.password;

    if(user != 'ayush' || pass != 'ayush123'){
        res.status(400).json({
            msg : "invalid user or password"
        })
        //eaarly return;
        return;
    }

    if(kidney != 1 && kidney != 2){
        res.status(400).json({
            msg : "wrong inut"
        })
        return;
    }

    res.status(200).send("your kidney is fine.");
})

app.listen(3000);