'use strict';

var path = require('path'),
    xmlReader = require('read-xml');

console.log('Part - 1');
const fs = require('fs');
const Parser = require('xml2js-parser');

var parser = new Parser({trim: true});
fs.readFile('/home/maazmmd/projects/Learn/Tutorial/NodeMailer/ProjectSmile_MailSMSConfig.xml', (err, xml) => {
    parser.parseString(xml, (err, result) => {
        console.dir(result);
        console.log('Done');
    });
});

console.log('Part - 2');

const parseStringSync = require('xml2js-parser').parseStringSync;

fs.readFile('/home/maazmmd/projects/Learn/Tutorial/NodeMailer/ProjectSmile_MailSMSConfig.xml', (err, xml) => {
    try {
        const res = parseStringSync(xml);
        console.log(res);
        console.log('Done');
    } catch (err)  {
        console.error(err);
    }
});


console.log('Part - 3');
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});


//var FILE = path.join(__dirname, 'test/xml/simple-iso-8859-1.xml');
 
//pass a buffer or a path to a xml file 
xmlReader.readXML(fs.readFileSync('/home/maazmmd/projects/Learn/Tutorial/NodeMailer/ProjectSmile_MailSMSConfig.xml'), function(err, data) {
  if (err) {
    console.error(err);
  }
 
  console.log('xml encoding:', data.encoding);
  console.log('Decoded xml:', data.content);
});

console.log('Part - 4'); 
var decodedXMLStream = fs.createReadStream('/home/maazmmd/projects/Learn/Tutorial/NodeMailer/ProjectSmile_MailSMSConfig.xml').pipe(xmlReader.createStream());
 
decodedXMLStream.on('encodingDetected', function(encoding) {
  console.log('Encoding:', encoding);
});
 
decodedXMLStream.on('data', function(xmlStr) {
  console.log(xmlStr);
  var xml2js = require('xml2js');

    var parser = new xml2js.Parser();
    var xml = '\
    <yyy:response xmlns:xxx="http://domain.com">\
        <yyy:success>\
            <yyy:data>some-value</yyy:data>\
        </yyy:success>\
    </yyy:response>';
    parser.parseString(xmlStr, function (err, result) {
        console.dir(result['mailConfiguration']['port']);
});
});

console.log('------------Working Module-------------------');

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



