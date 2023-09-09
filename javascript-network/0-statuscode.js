const request = require('request');
request.get('https://intranet.alxswe.com', function (error, response) {
if (error) {
    console.log(`Error: ${error.message}`)
}else{
    console.log(`code: ${response.statusCode}`);
}

});