const navbar = require('./navbar')
let b = {};
let body = {};
body.html_navbar = (d)=>{
    return navbar.html(d)
}
body.html = (d)=>{
    return `<div class="${d.body_class?d.body_class:'body-div'}">${body.html_navbar(d.navbar)}</div>`
}

b.html = (d)=>{
    return body.html(d)
}

module.exports = b;
