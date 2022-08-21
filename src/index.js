const express = require('express');
const app = express()
const page = require(__dirname+'/pages/page')
const d = require(__dirname+'/db/data')

//set public folder
app.use(express.static('public'))


app.get('/home',function(req,res){
	let data = d;
	res.send(page.index(data));
});

app.listen(process.env.port || 3000);