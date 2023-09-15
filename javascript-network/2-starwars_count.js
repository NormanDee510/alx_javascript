const request = require('request');

const apiURL = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

async function getWedgeAntillesMovieCount() {
  try {
    // Fetch data from the API
    const response = await request.get(apiURL);

    if (response.data && Array.isArray(response.data.results)) {
      const films = response.data.results;     
      let wedgeAntillesMovieCount = 0;     
      for (const film of films) {
        if (film.character_ids.includes(characterId)) {
          wedgeAntillesMovieCount++;
        }
      }

      console.log(`${wedgeAntillesMovieCount}`);
    } else {
      console.error('API response did not contain the expected data structure.');
    }
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
  }
}

getWedgeAntillesMovieCount();
