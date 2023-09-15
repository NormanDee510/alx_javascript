const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

function fetchAllFilms(apiUrl) {
  return new Promise((resolve, reject) => {
    request.get(apiUrl, (error, response, body) => {
      if (error) {
        reject(`Error fetching films: ${error.message}`);
      } else if (response.statusCode !== 200) {
        reject(`Error fetching films: Status Code ${response.statusCode}`);
      } else {
        try {
          const filmsData = JSON.parse(body);
          const wedgeFilms = filmsData.results.filter((film)=>{
            return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}`) 
          })
          resolve(filmsData);
        } catch (parseError) {
          reject(`Error parsing films JSON: ${parseError.message}`);
        }
      }
    });
  });
}

async function fetchCharacterData(characterUrl) {
  return new Promise((resolve, reject) => {
    request.get(characterUrl, (error, response, body) => {
      if (error) {
        reject(`Error fetching character: ${error.message}`);
      } else if (response.statusCode !== 200) {
        reject(`Error fetching character: Status Code ${response.statusCode}`);
      } else {
        try {
          const characterData = JSON.parse(body);
          resolve(characterData);
        } catch (parseError) {
          reject(`Error parsing character JSON: ${parseError.message}`);
        }
      }
    });
  });
}

async function countWedgeAntillesAppearances(apiUrl, characterId) {
  try {
    const films = await fetchAllFilms(apiUrl);
    let count = 0;

    for (const film of films) {
      const characters = await Promise.all(film.characters.map(fetchCharacterData));

      if (characters.some((character) => character.url.endsWith(`people/${characterId}/`))) {
        count++;
      }
    }

    return count;
  } catch (error) {
    throw error; 
  }
}

countWedgeAntillesAppearances(apiUrl, characterId)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.error(error);
  });
