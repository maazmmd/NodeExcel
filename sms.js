console.log('----------Send SMS using Node JS---------------');

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '4f42244d',
    apiSecret: 'FB6LP4KovCbVSjuq'
});

const from = 'Acme Inc';
const to = '9449115598';
const text = 'A text message sent using the Nexmo SMS API';

nexmo.message.sendSms(from, to, text);

console.log('-------------------------------------------------------------------');

console.log('----Send SMS using Spring Edge---');
var springedge = require('springedge');

var params = {
    'apikey': 'Z1TD7XBYU8', // API Key
    'sender': 'SEDEMO', // Sender Name
    'to': [
        '919449115598'  //Moblie Number
    ],
    'message': 'test+message'
};

springedge.messages.send(params, 5000, function (err, response) {
    if (err) {
        return console.log(err);
    }
    console.log(response);
});

console.log('----------Send Sucessfully to '+ to +' ---------------');

