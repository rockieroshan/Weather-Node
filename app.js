// const request = require('request');
// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather')
//
// const argv = yargs
//   .options({
//   a:{
//       demand: true,
//       alias: 'address',
//       description: "Address to fetch weather for",
//       string: true,
//
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//   if(errorMessage){
//     console.log('errorMessage');
//   }
//   else {
//     console.log(JSON.stringify(result, undefined, 2));
//   }
// });

// //Api  f33328ad8788769c310dfad0c4f6310e

const request = require('request');

request({
  url:'https://api.darksky.net/forecast/f33328ad8788769c310dfad0c4f6310e/39.9396284,39.9396284',
  json:true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
  }
  else{
      console.log("Unable to fetch the weather");
  }
})
