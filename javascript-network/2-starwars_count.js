const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;


function fetchAllFilms(apiUrl) {
  return new Promise((resolve, reject) => {
    request.get(apiUrl, (error, response, body) => {
      if (error) {
        reject(`Error: ${error.message}`);
      } else if (response.statusCode !== 200) {
        reject(`Error: Status Code ${response.statusCode}`);
      } else {
        try {
          const filmsData = JSON.parse(body).results;
          resolve(filmsData);
        } catch (parseError) {
          reject(`Error parsing JSON: ${parseError.message}`);
        }
      }
    });
  });
}
async function countWedgeAntillesAppearances(apiUrl, characterId) {
  const films = await fetchAllFilms(apiUrl);
  let count = 0;

  for (const film of films) {
    const characters = await Promise.all(film.characters.map((characterUrl) => {
      return new Promise((resolve, reject) => {
        request.get(characterUrl, (error, response, body) => {
          if (error) {
            reject(`Error fetching character: ${error.message}`);
          } else if (response.statusCode !== 200) {
            reject(`Error: Status Code ${response.statusCode}`);
          } else {
            try {
              const characterData = JSON.parse(body);
              resolve(characterData);
            } catch (parseError) {
              reject(`Error parsing JSON: ${parseError.message}`);
            }
          }
        });
      });
    }));

    if (characters.some((character) => character.url.endsWith(`people/${characterId}/`))) {
      count++;
    }
  }

  return count;
}
countWedgeAntillesAppearances(apiUrl, characterId)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.error(error);
  });

