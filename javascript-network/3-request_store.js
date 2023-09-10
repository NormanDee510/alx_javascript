const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];


request.get(url, (error, response, body) => {
  if (error) {   
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {    
    console.error(`Error: Status Code ${response.statusCode}`);
  } else {
    try {      
      fs.writeFileSync(filePath, body, 'utf-8');
      console.log(`File saved to ${filePath}`);
    } catch (writeError) {
      console.error(`Error writing to file: ${writeError.message}`);
    }
  }
});
