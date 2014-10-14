// server.js
// BASE SETUP
// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 						// define our app using express
var bodyParser = require('body-parser');
var users = require('./config/routes/user');
var config = require('./config/config');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
console.log(config["port"])
console.log(config.port)
var port = process.env.PORT || config.port; 		// set our port
var db_port = config.db_port;
var db_name = config.db_name;
var db_host = config.db_host;
// DATABASE
var mongoose   = require('mongoose');
mongoose.connect('mongodb://'+db_host+':'+db_port+'/'+db_name); // connect to our database

// ROUTES FOR OUR API
var router = express.Router(); 				// get an instance of the express Router
	
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'Hey Man its ready to create apis!!!' });	
});

// Routes to create a user
// uri: /users, method: POST, GET
router.route('/users')
	.post(users.create)
	.get(users.index)

// on routes that end in /users/:id
router.route('/users/:id')
	.get(users.show)
	.put(users.update)
	.delete(users.delete)

// to check all the requests
var checker = function(req, res){
	console.log('Request recieved');
	next(); // to go the the another routes
}

// To check all the requrest is hitting to server or not
router.use(checker)

// all of our routes will be prefixed with /api
app.use('/api/v1', router);

// START THE SERVER
app.listen(port);
console.log('SERVER START ON PORT: ' + port);