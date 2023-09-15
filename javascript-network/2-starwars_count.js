const request = require('request');
const apiUrl =  process.argv[2];
//
const characterId = 18;
  
    request.get(apiUrl, (error, response, body) => {
      if (error) {
        console.error(`Error fetching films: ${error.message}`);
      } else if (response.statusCode !== 200) {
        console.error(`Error fetching films: Status Code ${response.statusCode}`);
      } else {
        try {
          const filmsData = JSON.parse(body).results;
          const filteredFilmWithWedge = filmsData.results.filter(function (film){
            return film.characters.includes(`/${characterId}/`);
          })
          console.log(filteredFilmWithWedge.length);
        } catch (parseError) {
          console.error(`Error parsing films JSON: ${parseError.message}`);
        }
      }
    });




