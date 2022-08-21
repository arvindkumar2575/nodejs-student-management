const express = require('express');
const router = express.Router();
const db = require('../db/data')
const page = require('../pages/page')

router.get('/',(req,res)=>{
    let data = db
    res.send(page.html(data))
})

module.exports = router;