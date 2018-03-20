var fs = require('fs');
var HashMap = require('hashmap');
const cheerio = require('cheerio');
var StringBuilder = require('stringbuilder');
StringBuilder.extend('string');
var path = require('path');
var helper = require("./anotherFileFunction.js");

console.log('-------------------------------------------------------------------');
// Hash Map Implementation in Node Js
var emailDetailsMap = new HashMap();

emailDetailsMap.set("Server", "noora4.yourpersonalhost.com");
emailDetailsMap.set("port", "465");
emailDetailsMap.set("secure", "true");
emailDetailsMap.set("username", "info@projectsmiletrust.com");
emailDetailsMap.set("password", "psinfologin");
emailDetailsMap.set("To", "noora4.yourpersonalhost.com");
emailDetailsMap.set("From", "info@projectsmiletrust.com");
emailDetailsMap.set("Cc", "mohammedmaaz@live.in;learn4survival@gmail.com");
emailDetailsMap.set("Bcc", "maazm@smh.ca");
emailDetailsMap.set("Body", "<b>Hello world Test Email from Node JS?</b>");
emailDetailsMap.set("Subject", "Hello ✔");
emailDetailsMap.set("Text", "Hello world?");
emailDetailsMap.set("AttachmentList", "noora4.yourpersonalhost.com");

console.log(emailDetailsMap.get("Server"));

console.log('-------------------------------------------------------------------');

//JSoup Equvalent Java -> NodeJs
const jsdom = require("jsdom");
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

console.log('-------------------------------------------------------------------');

//Convert Foreign Language to Unicdoe

var str = "TEST IMAGE CHINESE 你好！你好嗎  ARABIC  مرحبا! كيف حالك   JAPANESE  アラビア語で何か言いなさい  SPANISH Di algo en árabe";

var convertToUnicode = function(htmlMessageBody) {
    var htmlUnicodeStr = '';
    for(i=0; i<htmlMessageBody.length; i++) {
        if(htmlMessageBody.charCodeAt(i)>127) {
            htmlUnicodeStr += '&#' + htmlMessageBody.charCodeAt(i) + ';';
        }
        else {
            htmlUnicodeStr += htmlMessageBody.charAt(i);
        }
    }
    return htmlUnicodeStr;
}

console.log(convertToUnicode(str));

console.log('-------------------------------------------------------------------');

//cheerio npm Pacakge

var test = `<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>`;

const $$ = cheerio.load(test);
const fruits = [];

$$('li').each(function(i, elem) {
  fruits[i] = $(this).text();
});
 
console.log(fruits.join(', '));

console.log('-------------------------------------------------------------------');

 let count = 1;
 let embededAttachment = {
    filename: 'image.jpg',
    path: '/home/maazmmd/projects/Learn/myGitRepo/NodeMail',
    cid: 'image' +  count//same cid value as in the html img src
};

let attachments = '[12121212]';
attachments = attachments.substring(0,attachments.length-1);
console.log(embededAttachment);
console.log(attachments);

 
console.log('-------------------------------------------------------------------');
const camaro = require('camaro')

//const xml = `<yyy:response xmlns:xxx='http://example.com'> <yyy:success><yyy:data>some-value</yyy:data> </yyy:success></yyy:response>`
const xml =`
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
<Outward>
    <mailConfiguration id="smtp">
        <smtpServer>noora4.yourpersonalhost.com</smtpServer>
        <port>465</port>
        <authentication>true</authentication>
        <userName>info@projectsmiletrust.com</userName>
        <password>psinfologin</password>
        <!-- Mac OS path D: should be replaced by /Users/userName(mohammmedmaaz)/Documents/ -->
        <emailBodyImagesPath>D:/projectSmileAPI/encryptedPDF/imageProcessing/</emailBodyImagesPath>
        <attachmentPath>D:/projectSmileAPI/encryptedPDF/</attachmentPath>
        <emailBodyTemplateFileName>PSMailBodyTemplate.html</emailBodyTemplateFileName>
        <fromEmailAddress>info@projectsmiletrust.com</fromEmailAddress>
        <emailSubject>Receipt of Donation to Project Smile [April 2017 - Mar 2018] : </emailSubject>
        <!-- Wait for 15 Seconds after sending each email / 1 second is represented as 1000 milliSec-->
        <waitingPeriod>4000</waitingPeriod>
        <CC>projectsmile.trust@gmail.com;info@projectsmiletrust.com</CC>
    </mailConfiguration>

    <sms>
        <!-- Mandatory -->
        <server_url>http://sms.digimiles.in/bulksms/bulksms</server_url>
        <username_label>username</username_label>
        <username>di78-trans</username>        <!--UserName with 'PmdTestSms' in hub(Server_url) -->
        <password_label>password</password_label>
        <password>miles</password>            <!-- Password for user 'PmdTestSms' -->
        <!-- /Mandatory -->

        <countryCode_label></countryCode_label>
        <phonenumber_label>destination</phonenumber_label>
        <message_label>message</message_label>
        <sender_label>source</sender_label>
        <sender>DIGIML</sender>
        <flashMessage_label></flashMessage_label>
        <flashMessage></flashMessage>

        <!--Different Params for other Gateways in above tags not valid  -->
        <!-- Usage as follows
               <param1>label1</param1>
           <param1_value>value1</param1_value>
        -->
        <param1>type</param1>
        <param1_value>0</param1_value>
        <param2>dlr</param2>
        <param2_value>1</param2_value>
        <param3></param3>
        <param3_value></param3_value>
        <param4></param4>
        <param4_value></param4_value>
        <param5></param5>
        <param5_value></param5_value>

        <messageToSent>Project Smile Test Message</messageToSent>
    </sms>
</Outward>
`;
const template = {
    data: '//port',
    smtp: ''
}

//console.log(camaro(xml, template));
template.smtpServer = 'TestData';
//console.log(template);
helper.printData(template);

let fileName = '/home/maazmmd/projects/Learn/myGitRepo/NodeMail/lib/encryptedPDF/imageProcessing/test.pdf';
console.log('With out FileName Module -->' + fileName.endsWith(".pdf"));

// var emailDetailsMap = new HashMap();
// let configDetails = camaro(xml, template);
//
// // Get Config Details using variable.TagName --> console.log(configDetails.smtpServer);
//
// var configArr = configDetails.toString().split(",");
// for(var i=0; i<configArr.length; i++) {
//     var keyValuePair = configArr[i].split(':');
//     emailDetailsMap.set(keyValuePair[0], keyValuePair[1]);
// }

console.log('-------------------------------------------------------------------');

console.log('----------Send SMS using Node JS---------------');

// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//     apiKey: '4f42244d',
//     apiSecret: 'FB6LP4KovCbVSjuq'
// });

// const from = 'Acme Inc';
// const to = '9449115598';
// const text = 'A text message sent using the Nexmo SMS API';

// nexmo.message.sendSms(from, to, text);

console.log('-------------------------------------------------------------------');

// console.log('----Send SMS using Spring Edge---');
// var springedge = require('springedge');
//
// var params = {
//     'apikey': 'Z1TD7XBYU8', // API Key
//     'sender': 'SEDEMO', // Sender Name
//     'to': [
//         '919449115598'  //Moblie Number
//     ],
//     'message': 'test+message'
// };
//
// springedge.messages.send(params, 5000, function (err, response) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(response);
// });
//
// console.log('----------Send Sucessfully to '+ to +' ---------------');
//
// console.log('-------------------------------------------------------------------');

//http://snipplr.com/view/46017/

console.log('-----Get File as String (Synchronous Execution)-----');
var fs = require('fs');
//var file = fs.readFileSync(path, "utf8");
var file = fs.readFileSync('/home/maazmmd/projects/Learn/myGitRepo/NodeMail/lib/ProjectSmile_MailSMSConfig.xml', "utf8");
//console.log(file);
console.log('-------------------------------------------------------------------');

/*Java Basics
Str --> {a:1,b:2}
Split the String on the Basis of commas (",") and then with with ("=") OR (":") --> Delimiter and Insert in the HashMap

String s = "Comma Separated String";
HashMap<String, String> map = new HashMap<String, String>();

String[] arr = s.split(",");

String[] arStr = arr.split(Delimiter);

map.put(arr[0], arr[1]);
 */

var testData = `{filename: 'image.png',path: '/path/to/file'}`;

var ArrayList = require('arraylist');
var list = new ArrayList;
list.add(testData);
list.add(testData);
console.log(list);


// var configArr = configDetails.toString().split(",");
// for(var i=0; i<configArr.length; i++) {
//     var keyValuePair = configArr[i].split(':');
//     emailDetailsMap.set(keyValuePair[0], keyValuePair[1]);
// }
var jsesc = require('jsesc');
console.log(jsesc('Lorem ipsum "dolor" sit \'amet\' etc.'));

module.exports = template;


