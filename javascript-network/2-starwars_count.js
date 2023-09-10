const request = require('request');

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';

let filmCount = 0;

function fetchFilmData(url) {
  request.get(url, (error, response, body) => {
    if (error) { 
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {     
      console.error(`Error: Status Code ${response.statusCode}`);
    } else {
      try {       
        const filmData = JSON.parse(body);        
        if (filmData.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          filmCount++;
        }        
        if (filmData.next) {         
          fetchFilmData(filmData.next);
        } else {        
          console.log(filmCount);
        }
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  });
}
fetchFilmData(apiUrl);
