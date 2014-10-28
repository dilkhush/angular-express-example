// User required
var User = require('./../../app/models/user');

// add a user
exports.create = function(req, res){
	var user = new User();
	user.name = req.body.name;
	user.email = req.body.email;
	user.password = req.body.password;
	user.save(function(errors){
		if(errors) res.send({message: errors.message, status: 422});
		res.status(201).json({message: 'User created', status: 201});
	})
}

// users list
// url: /users, method: GET
exports.index = function(req, res){
	User.find(function(errors, users){
		if (errors)	res.send({message: errors.message, status: 422});
		res.json({users: users, status: 200});
	})
}

// to get a user
exports.show = function(req, res){
	User.findById(req.params.id, function(errors, user) {
		if (errors)	res.send({message: errors.message, status: 422});
		res.json({user: user, status: 200});
	});
}

// To update a user
exports.update = function(req, res){
	User.findById(req.params.id, function(errors, user){
		if(errors) res.send(errors);
		user.name = req.body.name;
		user.email = req.body.email;
		user.save(function(errors){
			if(errors) res.send({message: errors.message, status: 422});
			res.json({message: 'user updated', status: 204})
		})
	})
}

// delete user
exports.delete = function(req, res){
	User.remove({
		_id: req.params.id
	}, function(errors, user){
		if(errors) res.send({message: errors.message, status: 422});
		res.json({message: 'deleted successfully', status: 200});
	})
}

exports.deleteUsers = function(req, res){
	User.remove({}, function(errors, user){
		if(errors) res.send({message: errors.message, status: 422});
		res.json({message: 'deleted successfully', status: 200});
	})
}