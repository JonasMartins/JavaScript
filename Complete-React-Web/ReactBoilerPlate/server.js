/**
 * [express description]
 * @type {[type]}
 *
 * Tendo acesso a toda API do express 
 * atravez dessa variável
 */
var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});