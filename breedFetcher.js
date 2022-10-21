const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?name=";

const fetchBreedDescription = (breedName, callback) => {
  request(`${url}${breedName}`, (error, response, body) => {
      
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        // console.log(data); // data for the user
        if (data[0]) {
          callback(null, data[0].description);
        } else {
          callback("Cat breed does not exist", null);
          //  console.log("breed not found");
        }
      }
    });
};

module.exports = { fetchBreedDescription };



