const request = require('request');

var geocodeAddress = (address, callback) => {

  /* argv.address é a entrada do usuario no terminal e essa função vai codificar o 20% nos espaços */
  var encodedAddress = encodeURIComponent(address)

  /*Ex entrada: 1614 south broad street philadelphia*/
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    if (error) {
      callback('Unable to connect google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status ===  'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }  
  });
}


module.exports.geocodeAddress = geocodeAddress;