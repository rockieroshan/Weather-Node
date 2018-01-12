const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/f33328ad8788769c310dfad0c4f6310e/${lat},${lng}`,
    json:true
  }, (error, response, body) => {
  if (error) {
    callback("Unable to connect to forecast.io server");
  }
  else if (response.statusCode === 400) {
    callback('Unable to fetch weather');
  }
  else if (response.statusCode === 200) {
    callback(undefined, {
      tem: body.currently.temperature,
      appaTem: body.currently.apparentTemperature
    });
  }
  })

}

module.exports.getWeather = getWeather;
