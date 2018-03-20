//JSoup Equvalent Java -> NodeJs
const jsdom = require("jsdom");
const cheerio = require('cheerio');
const { JSDOM } = jsdom;

var htmlBody = `<!DOCTYPE html><!DOCTYPE html><html>
<body>
<img src="klematis.jpg" alt="flower" width="150" height="113">
<img src="klematis2.jpg" alt="flower" width="152" height="128">
<img src="smiley.gif" alt="Smiley face" width="42" height="42">
<p>Click the button to display the number of images in the document.</p>
<button onclick="myFunction()">Try it</button>
<p>Hello world</p>
</body>
</html>`;

const dom = new JSDOM(htmlBody, { includeNodeLocations: true });
console.log(dom.window.document.querySelector("p").textContent); //Print <p>Tag
console.log(dom.window.document.images.length);
// cheerio Declaration
const $ = cheerio.load(htmlBody);
$('img').each(function(i, elem) {
  var srcAttr = $(this).attr('src');
  console.log(srcAttr);
});

//cheerio npm Pacakge

var test = `<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>`;

const $$ = cheerio.load(test);
const fruits = [];

$$('li').each(function(i, elem) {
  fruits[i] = $(this).text();
});
 
console.log(fruits.join(', '));