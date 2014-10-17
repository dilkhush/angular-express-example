var bcrypt       		  = require('bcrypt');
var init              = require('../init')
var salt_work_factor  = init.SALT_WORK_FACTOR;

exports.encryptPAssword  = function(next){
	var user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(salt_work_factor, function(err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
}

exports.checkPassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
}