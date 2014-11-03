var passport = require('passport');
var serialize = require('./../../app/serializers/user_serializer');
var User = require('../models/user');

exports.login = function(req, res){
  if(!req.body.email) res.json({message: 'Email can not be blank', status: 400})
  if(!req.body.password) res.json({message: 'Password can not be blank', status: 400})
  User.findOne({email: req.body.email}, function(error, user){
    if(error) return res.json({message: error.message, status: 422});
    if(!user) return res.json({message: 'Email/Password is not matched', status: 401});
    user.comparePassword(req.body.password, function(error, is_match){
      if(error) return res.json({message: error.message, status: 422});
      if(!is_match) return res.json({message: 'Email/Password is not matched', status: 401});
      user.access_token = user.generate_access_token();
      user.save(function(error, user){
        if(error) return res.json({message: error.message, status: 422});
        user = serialize.user(user)
        res.json({message: 'LoggedIn Successgully', user: user, status: 201})
      })
    })
  })
}

exports.logout = function(req, res){
  var access_token = req.params.access_token;
  User.findOne({access_token: access_token}, function(error, user){
    if(error) return res.json({message: error.message, status: 422});
    if(!user) return res.json({message: 'User not found', status: 404});
    user.access_token = null;
    user.save(function(error, user){
      if(error) return res.json({message: error.message, status: 422});
      res.json({message: 'LoggedOut Successgully', status: 200})
    })
  })
}
