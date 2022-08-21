let page = {};

let data = {
  name: "arvind kumar",
};
page.doctype = `<!DOCTYPE html>`;

page.htmlStart = `<html lang="en">`;
page.htmlEnd = `</html>`;

page.htmlHeadStart = `<head>`;
page.htmlHeadEnd = `</head>`;

page.htmlMetaData = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
`;

page.htmlBodyStart = `<body>`;
page.htmlBodyEnd = `</body>`;

page.htmlBody = `<h1>This is ${data.name} from index.html file.</h1>`;

page.index = `${page.doctype}${page.htmlStart}${page.htmlHeadStart}${page.htmlMetaData}${page.htmlHeadEnd}${page.htmlBodyStart}${page.htmlBody}${page.htmlBodyEnd}${page.htmlEnd}`;


module.exports = page;
