const request = require('request');
const apiUrl = 'swapi-api.alx-tools.com/api/films';
const characterId = 18;


request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
  } else {
    try {
      const filmsData = JSON.parse(body).results;
      let count = 0;    
      filmsData.forEach((film) => {
        if (film.characters.includes(apiUrl + 'people/' + characterId + '/')) {
          count++;
        }
      });

      console.log(count);
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
    }
  }
});
