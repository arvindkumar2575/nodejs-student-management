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
        navbar:{
            left_nav: [
                {
                    id:1,
                    name:'Home',
                    type:'anchor',
                    link:'/home'
                },
                {
                    id:2,
                    name:'About Us',
                    type:'anchor',
                    link:'/about-us'
                }
            ],
            right_nav: [
                {
                    id:1,
                    name:'SignIn',
                    type:'button',
                    link:'/home'
                }
            ],
            scripts:[
                {
                    path:'js/app.js',
                }
            ]
        },
        first_name:'arvind',
        last_name:'kumar'
    }
    }
    module.exports=data