const request = require('request');

const apiUrlFilms = 'https://swapi-api.alx-tools.com/api/films/';
const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

let filmCount = 0;

function fetchCharacterData(url) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Status Code ${response.statusCode}`);
    } else {
      try {
        const characterData = JSON.parse(body);
        const filmAppearances = characterData.films;        
        filmAppearances.forEach((filmUrl) => {
          request.get(filmUrl, (filmError, filmResponse, filmBody) => {
            if (filmError) {
              console.error(`Error: ${filmError.message}`);
            } else if (filmResponse.statusCode !== 200) {
              console.error(`Error: Status Code ${filmResponse.statusCode}`);
            } else {
              const filmData = JSON.parse(filmBody);
              if (filmData.characters.includes(characterUrl)) {
                filmCount++;
              }
            }
          });
        });
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  });
}
fetchCharacterData(characterUrl);
setTimeout(() => {
  console.log(filmCount);
}, 1000); 
