const navbar = require('./navbar')
let b = {};
let body = {};
body.html_navbar = (d)=>{
    let html =''
    d.forEach(e => {
        html+=`<li class="${e.id}">${e.name}</li>`
    });
    return html
}
body.html = (d)=>{
    return `<div class="${d.body_class?d.body_class:'app'}">${body.html_navbar(d.navbar)}</div>`
}

b.html = (d)=>{
    return body.html(d)
}

module.exports = b;
