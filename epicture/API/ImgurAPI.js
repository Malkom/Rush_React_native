const clientId = '8defc05d2a54813';
const clientSecret = '6aa48fdc84b59ee0f04a9dd80e4f46b50da790fb';
const accessToken = 'a4d39fa9e508527d37c8dd90addfa3bd448842e5';
const refreshToken = '9c5a83acc413de4f7ee6e856130ce37549c43ee6';
const bearer = '9ac56dccf83b4cd7a88abf943e9602f4d32180a8';

const hostname = 'https://api.imgur.com';
const path = '/3/image/NhF6ava';

let options = {
    'method': 'GET',
    'headers': {
        'Authorization': `Client-ID ${clientId}`
    }
};

export function _getHotImages (){
    return fetch(hostname + path, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

