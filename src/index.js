const express = require('express');
const app = express()
const page = require(__dirname+'/components/page.js')


app.get('/home',function(req,res){
  res.send(page.index);
});

app.listen(process.env.port || 3000);