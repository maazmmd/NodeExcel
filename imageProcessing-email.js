
const cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var ArrayList = require('arraylist');

let filePath ='/home/maazmmd/projects/Learn/myGitRepo/NodeMail/lib/encryptedPDF/imageProcessing';
let htmlBodyStr = fs.readFileSync(path.join(filePath, 'PSMailBodyTemplate.html'), "utf8");
const $ = cheerio.load(htmlBodyStr);

    $('img').each(function (i, elem) {
        var imageSourceContent = $(this).attr('src');
        if (!imageSourceContent.includes("http")) {
        	console.log('Doesnt contain http in image');
            if (imageSourceContent.includes("base64")) {
            	console.log('Contain Base64 Image');
            }
        }
    });

let attachment = `{filename: 'test.pdf',path: '/home/maazmmd'}`;
let attachmentList = new ArrayList;
attachmentList.add(attachment);
JSON.stringify(attachmentList);