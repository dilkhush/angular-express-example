var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var password   = require('../../lib/user_password')  
var UserSchema = new Schema({
	name: {type: String, required: true },
	email: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);

UserSchema.pre('save', password.encryptPAssword);

UserSchema.methods.comparePassword = password.checkPassword;