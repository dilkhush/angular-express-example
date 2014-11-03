var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var password   = require('../../lib/user_password')  
var UserSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true },
	access_token: {type: String}
});

var rand = function() {
  return Math.random().toString(36).substr(2);
};

UserSchema.pre('save', password.encryptPAssword);

UserSchema.methods.comparePassword = password.checkPassword;

UserSchema.methods.generate_access_token = function(){
  return rand() + rand();
}

module.exports = mongoose.model('User', UserSchema);
