let n = {};

let data = {
  name: "arvind kumar",
};

n.top_nav = (d)=>{
	return `
				<nav class="navbar">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							<img src="${d.logo_path}" alt="" width="30" height="24" class="d-inline-block align-text-top">
							${d.website_name}
						</a>
					</div>
				</nav>
			`
}

n.sidebar_nav = (d)=>{
	let html =''
    d.forEach(e => {
		if(e.type=='anchor'){
			html+=`<a href="${e.link}"><li class="${e.id}">${e.name}</li></a>`	
		}else{
			html+=`<li class="${e.id}">${e.name}</li>`
		}
    });
	return `<div class="sidebar-div">${html}</div>`
}

n.html = (d)=>{
	
    return `
				<div class="navbar-div">
					${n.top_nav(d.top_nav)}
				</div>
			`
}



module.exports = n;
