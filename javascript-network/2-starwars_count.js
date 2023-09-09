const request = require('request');

const apiUrl = `https://swapi-api.alx-tools.com/api/films/`
request.get(apiUrl, (error, response, body) => {
 if (error) {
console.error(`Error: ${error.message}`);
 } else if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
 } else {
    try {
        const filmData = JSON.parse(body);
       let filmCount = 0;
       filmData.array.forEach(film => {
        if(film.characters.includes("https://swapi-api.alx-tools.com/api/people/18/"))
       filmCount++;
    });
    }catch (parseError){
        console.error(`Error parsing JSON: ${parseError.message}`);
    }
 }   
})