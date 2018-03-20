'use strict';
const nodemailer = require('nodemailer');
var HashMap = require('hashmap');
var StringBuilder = require('stringbuilder');
StringBuilder.extend('string');
var process = require("process");
var fs = require("fs");


    let cidCount = 0;
    let fileName;
    let imageSourceContendIdMap = new HashMap();
    let htmlBodyStr = fs.readFileSync('/home/maazmmd/projects/Learn/myGitRepo/NodeMail/lib/encryptedPDF/imageProcessing/PSMailBodyTemplate.html', "utf8");
    const cheerio = require('cheerio');
    const $ = cheerio.load(htmlBodyStr);

    $('img').each(function (i, elem) {
        let imageSourceContent = $(this).attr('src');
        if (!imageSourceContent.includes("http")) {
            if (imageSourceContent.includes("base64")) {
                let srcContentArray = [];
                srcContentArray = imageSourceContent.split(",");
                let formatEncodingString = srcContentArray[0];
                //base64Data
                let imageString = srcContentArray[1];
                let imageFormat = formatEncodingString.split(";")[0];
                imageFormat = imageFormat.split("/")[1];

                let hrTime = process.hrtime();
                console.log(hrTime);
                let currentMicroTime = hrTime[0] * 1000000 + hrTime[1] / 1000;
                currentMicroTime = currentMicroTime.toString().split(".")[0];	
                console.log(currentMicroTime);
                fileName = "image" + currentMicroTime + "." + imageFormat;
                require("fs").writeFile('/home/maazmmd/Desktop/base64/'+ fileName, imageString, 'base64', function (err) {
                    if(err){
                    	console.log(err);
                    }	
                });
                console.log(fileName);
            } else {
                fileName = imageSourceContent;
            }
            cidCount++;
            let attachmentList = [];
            $(this).attr('src', "cid:image" + cidCount);
            let embededAttachment = {filename: fileName, path: '/home/maazmmd/Desktop/base64/'+ fileName, cid: 'image' + cidCount};
            console.log(embededAttachment);
            imageSourceContendIdMap.set(imageSourceContent, $(this).attr('src'));
        }
    });
    if (imageSourceContendIdMap.size > 0) {
        imageSourceContendIdMap.forEach(function (value, key) {
            console.log('Map Key Value Pair -- ' + key + " : " + value);
            htmlBodyStr = htmlBodyStr.replace(key, value);
        });
    }