const body = require("../components/body");
const helper = require("../common/helper");
let p = {};

let data = {
	name: "arvind kumar",
};
p.doctype = `<!DOCTYPE html>`;

p.htmlStart = `<html lang="en">`;
p.htmlEnd = `</html>`;

p.htmlHeadStart = `<head>`;
p.htmlHeadEnd = `</head>`;

p.htmlMetaData = (d) => {
	let styles = "";
	if (helper.isNotEmpty(d.stylesheets)) {
		d.stylesheets.forEach((e) => {
			styles += `<link rel="stylesheet" href="${e.path}">`;
		});
	}
	return `
				<meta charset="UTF-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>${d.title}</title>
				${styles}
			`;
};

p.htmlBodyStart = `<body>`;
p.htmlBodyEnd = `</body>`;

p.htmlBody = (d) => {
	let scripts = "";
	if (helper.isNotEmpty(d.scripts)) {
		d.scripts.forEach((e) => {
			scripts += `<script ${e.type?'type="'+e.type+'"':''} src="${e.path}"></script>`;
		});
	}
	return `
				<div class="page-div">
					${body.html(d)}
					${scripts}
				</div>
			`;
};

p.index = (d) => {
	return `${p.doctype}
	${p.htmlStart}
	${p.htmlHeadStart}
	${p.htmlMetaData(d.meta)}
	${p.htmlHeadEnd}
	${p.htmlBodyStart}
	${p.htmlBody(d.body)}
	${p.htmlBodyEnd}
	${p.htmlEnd}`;
};

module.exports = p;
