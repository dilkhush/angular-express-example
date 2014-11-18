var auth = require('../../app/controllers/auth.js')
exports.init_routes = function(app, express, passport){
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
		.get(passport.authenticate('bearer', { session: false }), users.index)

	// on routes that end in /users/:id
	router.route('/users/:id')
		.get(passport.authenticate('bearer', { session: false }), users.show)
		.put(passport.authenticate('bearer', { session: false }), users.update)
		.delete(passport.authenticate('bearer', { session: false }), users.delete)

	router.route('/delete_users').delete(passport.authenticate('bearer', { session: false }), users.deleteUsers)

	// to check all the requests
	var checker = function(req, res){
		next(); // to go the the another routes
	}

	// To check all the requrest is hitting to server or not
	router.use(checker)

  // Login Url
  router1.route('/login')
    .post(auth.login)

  // Logout Url
  router1.route('/logout')
    .delete(auth.logout)

	// all of our routes will be prefixed with /api
	app.use('/api/v1', router);
	app.use('/', router1);
}
