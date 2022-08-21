const express = require('express');
const app = express()


//dummy data
const db = require(__dirname+'/db/data')

//routers
const homeRouter = require("./routes/home")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set public folder
app.use(express.static('public'))

app.use('/home',homeRouter)

// app.get('/home',function(req,res){
// 	let data = db;
// 	res.send(page.index(data));
// });

app.listen(process.env.port || 3000);