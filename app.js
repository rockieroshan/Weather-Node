const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
  a:{
      demand: true,
      alias: 'address',
      description: "Address to fetch weather for",
      string: true,

  }
})
.help()
.alias('help', 'h')
.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//   if(errorMessage){
//     console.log('errorMessage');
//   }
//   else {
//     console.log(JSON.stringify(result, undefined, 2));
//   }
// });

// //Api  f33328ad8788769c310dfad0c4f6310e

weather.getWeather(39.9396284, -75.186639599999, (errorMessage, weatherResult) =>{
    if(errorMessage){
      console.log('errorMessage');
    }
    else {
      console.log(JSON.stringify(weatherResult, undefined, 2));
    }
})
