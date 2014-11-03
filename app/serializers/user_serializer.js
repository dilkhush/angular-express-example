var user_keys = ['_id', 'name', 'email'];

var serilize_user = function(user){
	return {_id: user._id, name: user.name, email: user.email, access_token: user.access_token};
}

exports.user = function(user){
	return serilize_user(user);
}

exports.users = function(users){
	return users.reduce(function(serilized_users, user){
  	serilized_users.push(serilize_user(user));
  	return serilized_users;
	}, [])
}
