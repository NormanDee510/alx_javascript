const request = require('request');
const movieId = process.argv[2];
const baseUrl = 'https://swapi-api.alx-tools.com/api/';


function fetchAndPrintCharacters(characterUrls) {
  const promises = characterUrls.map((characterUrl) => {
    return new Promise((resolve, reject) => {
      request.get(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
          resolve();
        } else {
          reject(`Error fetching character: ${error.message}`);
        }
      });
    });
  });

  return Promise.all(promises);
}

request.get(`${baseUrl}films/${movieId}/`, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: Status Code ${response.statusCode}`);
  } else {
    try {
      const movieData = JSON.parse(body);      
      console.log(movieData.title);    
      fetchAndPrintCharacters(movieData.characters)
        .then(() => {       
          console.log('OK');
        })
        .catch((fetchError) => {
          console.error(fetchError);
        });
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
    }
  }
});
