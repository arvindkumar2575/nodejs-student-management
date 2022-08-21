const express = require('express');
const app = express()
const page = require(__dirname+'/pages/page')

//set public folder
app.use(express.static('public'))


app.get('/home',function(req,res){
  let data = {
    meta:{
      title:'New Page',
      stylesheets:[
        {
          path:'css/style.css'
        }
      ]
    },
    body:{
      body_class:'main_app',
      navbar:[
        {
          id:1,
          name:'Home',
          link:'/home'
        },
        {
          id:2,
          name:'About Us',
          link:'/about-us'
        }
      ],
      scripts:[
        {
          path:'js/app.js',
        }
      ],
      first_name:'arvind',
      last_name:'kumar'
    }
  }
  res.send(page.index(data));
});

app.listen(process.env.port || 3000);