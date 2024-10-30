//router also handle requests like app.

const express = require('express');
const {Router} = require('express');
const app = express();
const router = Router();

router.get('/first/second',(req,res) => {
    res.send('from get method')
})
router.get('/first',(req,res) => {
    res.send('hello here there')
})
router.get('/',(req,res) => {
    res.send('hello here')
})

app.use(router);
app.listen(3000);

