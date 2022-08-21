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
        navbar:{
            top_nav: {
                logo_path:'images/bootstrap-logo.svg',
                website_name:'Bootstrap',
                right_nav: [
                    {
                        id:1,
                        name:'SignIn',
                        class:'',
                        type:'button',
                        link:'/home',
                    }
                ]
            },
            sidebar_nav: [
                {
                    id:1,
                    name:'Home',
                    class:'home_tab',
                    type:'anchor',
                    link:'/home'
                },
                {
                    id:2,
                    name:'About Us',
                    class:'about_tab',
                    type:'anchor',
                    link:'/about-us'
                }
            ],
        },
        content:{
            home_tab:{},
            about_tab:{}
        },
        scripts:[
            {
                path:'js/jquery-3.6.0.min.js',
            },
            {
                path:'js/app.js',
            },
        ],
        first_name:'arvind',
        last_name:'kumar'
    }
    }
    module.exports=data