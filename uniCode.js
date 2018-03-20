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