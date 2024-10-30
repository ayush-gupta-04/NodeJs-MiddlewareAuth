//router also handle requests like app.
//but with the use of app.use(PATH,ROUTER) .. we can handle different paths with router.
//now we can handle --> /admin
//                      /admin/first
//                      /admin/second


const express = require('express');
const {Router} = require('express');
const app = express();
const router = Router();
app.use('/admin',router);

router.get('/first',(req,res) => {
    res.send('from get method')
})
router.get('/second',(req,res) => {
    res.send('hello here there')
})
router.get('/',(req,res) => {
    res.send('hello here')
})


app.listen(3000);

