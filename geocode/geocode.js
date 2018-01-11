const request = require('request');

const geocodeAddress = (address, callBack) => {

  const encodeedAddress = encodeURIComponent(address);

  request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeedAddress}`,
    json:true
  }, (error, response, body) => {
  if(error){
    callBack('Unable to connect to the server!!');

  }
    else if (body.status === 'ZERO_RESULTS') {
      callBack('unable to show your address!');

    }
    else if (body.status === 'OK') {
      callBack(undefined, {
        Address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      })

    }

  });

};

module.exports.geocodeAddress =  geocodeAddress;
