const express = require('express');
const app = express();

app.use((err,req,res,next) => {
    console.log(err);
    res.send('error encountered')
})


app.get('/',(req,res,next) => {
    const data = new Promise((resolve,reject) => {
        reject(new Error('custom error'))
    })
    data.catch((err) => {
        next(err)
    })
})


app.listen(3000);