

module.exports = {
    printData: function (map) {
    	console.log('--Data From previous File--');
    	console.log(map.smtpServer);
    	map.newdata = 'NewData';
    	console.log(map.newdata);
    }
}    