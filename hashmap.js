// Hash Map Implementation in Node Js
var HashMap = require('hashmap');
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