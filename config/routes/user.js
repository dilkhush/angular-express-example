exports.init_routes = function(app, express){
	var users =  require('../../app/controllers/users_controller')
	// ROUTES FOR OUR API
	var router = express.Router(); 				// get an instance of the express Router
	var router1 = express.Router(); 				// get an instance of the express Router
	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router1.get('/', function(req, res) {
		res.render('index.jade');	
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
		next(); // to go the the another routes
	}

	// To check all the requrest is hitting to server or not
	router.use(checker)

	// all of our routes will be prefixed with /api
	app.use('/api/v1', router);
	app.use('/', router1);
}