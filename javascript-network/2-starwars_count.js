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
        let count = 0;

        // Define a regular expression to match the character URL ending with the character ID
        const characterUrlRegex = new RegExp(`\\/people\\/${characterId}$`);

        // Iterate through the films and check if Wedge Antilles is present
        for (const film of films) {
          if (film.characters.some((character) => character.match(characterUrlRegex))) {
            count++;
          }
        }

        console.log(`Number of movies with Wedge Antilles: ${count}`);
      } else {
        console.error('API response did not contain the expected data structure.');
      }
    } catch (parseError) {
      console.error('Error parsing API response:', parseError.message);
    }
  });
}

getWedgeAntillesMovieCount();
