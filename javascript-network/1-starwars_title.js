const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`
request.get(apiUrl, (error, response, body) => {
 if (error) {
console.error(`Error: ${error.message}`);
 } else if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
 } else {
    try {
        const movieData = JSON.parse(body);
        const movieTitle = movieData.title;
        console.log(movieTitle);
    }catch (parseError){
        console.error(`Error parsing JSON: ${parseError.message}`);
    }
 }   
})