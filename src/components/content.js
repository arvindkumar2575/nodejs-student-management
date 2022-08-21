let c = {};

let data = {
  name: "arvind kumar",
};

c.content = (d)=>{
	return `
                from content
			`
}

c.html = (d)=>{
	
    return `
				<div class="content-div">
					${c.content(d.content)}
				</div>
			`
}



module.exports = c;
