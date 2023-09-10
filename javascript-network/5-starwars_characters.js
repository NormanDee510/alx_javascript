const request = require('request');
const movieId = process.argv[2];
const  baseUrl = 'https://swapi-api.alx-tools.com/';


function fetchMovieCharacters(movieId) {
    const movieUrl = `${baseUrl}api/films/${movieId}/`;

    request.get(movieUrl, (error, response, body) => {
     if (error) {
        console.log(`Error: ${error.message}`);
     }else if (response.statusCode !== 200) {
        console.error(`Error: Status Code ${response.statusCode}`); 
     }else {
        try{
        const movieData = JSON.parse(body);
        const characters = moveiData.characters;
        characters.forEach((characterUrl) => {
            request.get(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    console.error(`Error: ${charError.message}`);
                  } else if (charResponse.statusCode !== 200) {
                    console.error(`Error: Status Code ${charResponse.statusCode}`);
                  } else {
                    const characterData = JSON.parse(charBody);
                    console.log(characterData.name);
                  }   
            })
        })
        }catch (parseError){
            console.error(`Error parsing JSON: ${parseError.message}`);
        }
     }
    })
}