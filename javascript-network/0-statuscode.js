const request = require('request');
request.get('https://intranet.alxswe.com', function (error, response, body) {
if (statusCode === 200){
    console.log("http request successful",response);
}else if (statusCode === 400){
    console.log("http request failed", error)
}else{
    console.log('body:', body);
}
});