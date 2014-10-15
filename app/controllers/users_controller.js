// User required
var User = require('./../../app/models/user');

// add a user
exports.create = function(req, res){
	var user = new User();
	user.name = req.body.name;
	user.save(function(errors){
		if(errors) res.send(errors);
		res.status(201).json({message: 'User created', status: 201});
	})
}

// users list
// url: /users, method: GET
exports.index = function(req, res){
	User.find(function(errors, users){
		if (errors)	res.send(errors);
		res.status(200).json(users);
	})
}

// to get a user
exports.show = function(req, res){
	User.findById(req.params.id, function(errors, user) {
		if (errors)	res.send(errors);
		res.status(200).json(user);
	});
}

// To update a user
exports.update = function(req, res){
	User.findById(req.params.id, function(errors, user){
		if(errors) res.send(errors);
		user.name = req.body.name;
		user.save(function(errors){
			if(errors) res.send(errors);
			res.json({message: 'user updated', status: 204})
		})
	})
}

// delete user
exports.delete = function(req, res){
	User.remove({
		_id: req.params.id
	}, function(errors, user){
		if(errors) res.send(errors);
		res.json({message: 'deleted successfully'});
	})
}
