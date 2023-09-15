const request = require('request');

const apiURL = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

function getWedgeAntillesMovieCount() {
  request(apiURL, (error, response, body) => {
    if (error) {
      console.error('Error fetching data from the API:', error.message);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`API returned status code ${response.statusCode}`);
      return;
    }

    try {
      const data = JSON.parse(body);

      if (data && Array.isArray(data.results)) {
        const films = data.results;
        let wedgeAntillesMovieCount = 0;

        for (const film of films) {
          if (film.character_ids.includes(characterId)) {
            wedgeAntillesMovieCount++;
          }
        }

        console.log(`Number of movies with Wedge Antilles: ${wedgeAntillesMovieCount}`);
      } else {
        console.error('API response did not contain the expected data structure.');
      }
    } catch (parseError) {
      console.error('Error parsing API response:', parseError.message);
    }
  });
}

getWedgeAntillesMovieCount();
