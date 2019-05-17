const clientId = '8defc05d2a54813';
const clientSecret = 'a65ac590bbc7a5bb10bd1cc6142095158ed87f96';
const refreshToken = '9c5a83acc413de4f7ee6e856130ce37549c43ee6';


const hostname = 'https://api.imgur.com/3/';



///// GET IMAGE WITH ID ////// HAVE TO MODIFY
export function _getHotImages (){
    const path = 'image/NhF6ava';

    let options = {
        'method': 'GET',
        'headers': {
            'Authorization': `Client-ID ${clientId}`
        }
    };

    return fetch(hostname + path, options)
        .then(response => response.json())
        .catch((error) => {
            console.error(error);
        });
}

///// GET ACCOUNT DATA //////
export function _getAccountImages (token) {
    const path = 'account/me/images';
    // let test_token = '36889c6d77e22308c2a4c117992a3bf7e1c5e7ed';


    let options = {
        'method': 'GET',
        'headers': {
            'cache-control': 'no-cache',
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    return fetch(hostname + path, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });

}

///// GET ACCOUNT AVATAR //////
    export function _getAccountData (username, token) {
        const path = 'account/';


        let options = {
            'method': 'GET',
            'headers': {
                'cache-control': 'no-cache',
                'Authorization': `Bearer ${token}`
            }
        };
        return fetch(hostname + path + username, options)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });

}

