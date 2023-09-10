const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {   
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {    
    console.error(`Error: Status Code ${response.statusCode}`);
  } else {
    try {     
      const tasksData = JSON.parse(body);      
      const completedTaskCounts = {};     
      tasksData.forEach((task) => {
        if (task.completed) {
          if (completedTaskCounts[task.userId]) {
            completedTaskCounts[task.userId]++;
          } else {
            completedTaskCounts[task.userId] = 1;
          }
        }
      });     
      console.log(JSON.stringify(completedTaskCounts, null, 2));
    } catch (parseError) {
      console.error(`Error parsing JSON: ${parseError.message}`);
    }
  }
});
