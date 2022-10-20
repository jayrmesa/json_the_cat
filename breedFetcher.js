const request = require('request');
const catBreed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?name=`;

const breedFetcher = function() {
  request(url + catBreed, (error, response, body) => {
    if (error) {
      console.log(`Request Failed ${error}`);
      return;
    }

    if (response && response.statusCode === 200) {
    
      const data = JSON.parse(body);
      // console.log(data); // data for the user
   
      if (!data[0]) {
        //if there is no data
        console.log(`Cat breed ${catBreed} does not exist.`);
      } else {
        console.log(`description: ${data[0].description}`);
      }

    }
 
  });

};

breedFetcher();

