// server.js
// BASE SETUP
// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 						// define our app using express
var users = require('./config/routes/user');
var config = require('./config/config');
var init = require('./init');
module.exports = app;
var port = process.env.PORT || config.config.port; 		// set our port
init.init_setup(app, config, express);

users.init_routes(app, express);

// START THE SERVER
app.listen(port);
console.log('SERVER START ON PORT: ' + port);