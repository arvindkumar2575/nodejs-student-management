const navbar = require('./navbar')
const content = require('./content')

let b = {};
let body = {};
body.html_navbar = (d)=>{
    return navbar.html(d)
}

body.html_sidebar = (d)=>{
    return navbar.sidebar_nav(d)
}

body.html_content = (d)=>{
    return content.html(d)
}

body.html = (d)=>{
    return `<div class="body-div">
                ${body.html_navbar(d.navbar)}
                <div class="content-div">
                    ${body.html_sidebar(d.navbar.sidebar_nav)}
                    ${body.html_content(d.content)}
                </div>
            </div>`
}

b.html = (d)=>{
    return body.html(d)
}

module.exports = b;
