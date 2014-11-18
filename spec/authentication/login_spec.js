var request = require('request');
var json = require('../helpers/json_helper')

describe('For Login Api',function(){
  it("User should get an error Email is not passed", function(done) {
    var user = {form: { password: '12345678'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Email can not be blank')
      expect(body.status).toEqual(400)
      done();
    });
  }, 250);

  it("User should get an error Password is not passed", function(done) {
    var user = {form: { email: 'dil@dil.com'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Password can not be blank')
      expect(body.status).toEqual(400)
      done();
    });
  }, 250);

  it("User should get an error when email is invalid", function(done) {
    var user = {form: { email: 'invalid@dil.com', password: '12345678'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Email/Password is not matched')
      expect(body.status).toEqual(401)
      done();
    });
  }, 250);

  it("User should get an error when password is invalid", function(done) {
    var user = {form: { email: 'dilkhush1@gmail.com', password: 'invalid'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Email/Password is not matched')
      expect(body.status).toEqual(401)
      done();
    });
  }, 250);

  it("User should get be loggedin", function(done) {
    var user = {form: { email: 'dilkhush1@gmail.com', password: '12345678'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('LoggedIn Successgully')
      expect(body.status).toEqual(201)
      done();
    });
  }, 250);
})
