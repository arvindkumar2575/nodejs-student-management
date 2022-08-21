let n = {};

let data = {
  name: "arvind kumar",
};

n.left_nav = (d)=>{
	let html =''
    d.forEach(e => {
		if(e.type=='anchor'){
			html+=`<a href="${e.type}"><li class="${e.id}">${e.name}</li><a>`	
		}else{
			html+=`<li class="${e.id}">${e.name}</li>`
		}
    });
	return `<div class="left-nav">${html}</div>`
}

n.right_nav = (d)=>{
	let html =''
    d.forEach(e => {
        html+=`<li class="${e.id}">${e.name}</li>`
    });
	return `<div class="right-nav">${html}</div>`
}

n.html = (d)=>{
	
    return `
				<div class="${d.navbar_class?d.navbar_class:'navbar-div'}">
					${n.left_nav(d.left_nav)}
					${n.right_nav(d.right_nav)}
				</div>
			`
}



module.exports = n;
