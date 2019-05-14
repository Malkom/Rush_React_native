const clientId = '8defc05d2a54813';
const clientSecret = '6aa48fdc84b59ee0f04a9dd80e4f46b50da790fb';
const accessToken = 'a4d39fa9e508527d37c8dd90addfa3bd448842e5';
const refreshToken = '9c5a83acc413de4f7ee6e856130ce37549c43ee6';

let https = require('https');

let options = {
    'method': 'GET',
    'hostname': 'api.imgur.com',
    'path': '/3/gallery/',
    'headers': {
        'Authorization': 'Client-ID' + clientId
    }
};

export function _getHotImages (){
    let req = https.request(options, function (res) {
        let chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            let body = Buffer.concat(chunks);
            console.log(body.toString());
        });

        res.on("error", function (error) {
            console.error(error);
        });
    });

    var postData = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; ------WebKitFormBoundary7MA4YWxkTrZu0gW--";

    req.setHeader('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');

    req.write(postData);

    req.end();

}
