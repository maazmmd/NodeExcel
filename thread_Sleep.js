var sleep = require('thread-sleep');

for (var i = 0; i <= 5; i++) {
	sleep(5000);
	console.log('Print value after __ sec ' + i);
}

/*	
A Module exists which can be used and pauses the thread execution as per time specified

Checkout the Code Below and copy paste the code in a file and 

    //Run node fileName.js and analyse the terminal / Console

    var sleep = require('thread-sleep');
    
    for (var i = 0; i <= 5; i++) {
    	sleep(5000);
    	console.log('Print value after __ sec ' + i);
    }
	

[Here's the Link for Node Module 'thread-sleep'](https://www.npmjs.com/package/thread-sleep)

*/