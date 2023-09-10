const request = require('request');

const apiUrlFilms = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;
let filmCount = 0;

request.get(`https://swapi-api.alx-tools.com/api/people/${characterId}/`, (characterError, characterResponse, characterBody) => {
  if (characterError) {
    console.error(`Error: ${characterError.message}`);
  } else if (characterResponse.statusCode !== 200) {
    console.error(`Error: Status Code ${characterResponse.statusCode}`);
  } else {
    try {
      const characterData = JSON.parse(characterBody);
      const filmsAppearances = characterData.films;
      filmsAppearances.forEach((filmUrl) => {       
        request.get(filmUrl, (filmError, filmResponse, filmBody) => {
          if (filmError) {
            console.error(`Error: ${filmError.message}`);
          } else if (filmResponse.statusCode !== 200) {
            console.error(`Error: Status Code ${filmResponse.statusCode}`);
          } else {
            try {
              const filmData = JSON.parse(filmBody);
              if (filmData) {
                filmCount++;
              }
            } catch (parseError) {
              console.error(`Error parsing JSON: ${parseError.message}`);
            }
          }
        });
      });     
      setTimeout(() => {
        console.log(filmCount);
      }, filmsAppearances.length * 1000);
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
    }
  }
});
