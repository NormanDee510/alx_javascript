const request = require('request');

const apiURL = 'https://swapi-api.alx-tools.com/api/films/';
const characterId = 18;

async function getWedgeAntillesMovieCount() {
  try {   
    const response = await request.get(apiURL);
    const films = response.data.results;   
    let wedgeAntillesMovieCount = 0;
    for (const film of films) {
      if (film.character_ids.includes(characterId)) {
        wedgeAntillesMovieCount++;
      }
    }

    console.log(`${wedgeAntillesMovieCount}`);
  } catch (error) {
    console.error('Error fetching data from the API:', error.message);
  }
}

getWedgeAntillesMovieCount();
