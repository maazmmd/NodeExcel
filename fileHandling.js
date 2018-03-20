var fs = require("fs");
var path = require('path');
var filename = require('file-name');

let configPath = '/home/maazmmd/projects/Learn/myGitRepo/NodeMail/lib/encryptedPDF';
// Loop through all the files in the temp directory
fs.readdir(configPath, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        let completeFileNameWithPath = path.join(configPath, file);
        console.log('Log 1 -- ' + completeFileNameWithPath);
        	if (fs.statSync(completeFileNameWithPath).isFile()) {
                console.log('Log 2 --' + filename(completeFileNameWithPath));
                //var pdfFile = filename(completeFileNameWithPath);
                if (completeFileNameWithPath.endsWith(".pdf")) {
                	console.log('Log 3 --' +filename(completeFileNameWithPath));
                }
            }    
        
    });
});

fs.readdir(configPath, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        let completeFileNameWithPath = path.join(configPath, file);
        console.log('Log 1 -- ' + completeFileNameWithPath);
            if (fs.statSync(completeFileNameWithPath).isFile()) {
                console.log('Log 2 --' + filename(completeFileNameWithPath));
                //var pdfFile = filename(completeFileNameWithPath);
                if (completeFileNameWithPath.endsWith(".pdf")) {
                    console.log('Log 3 --' +filename(completeFileNameWithPath));
                }
            }    
        
    });
});     
