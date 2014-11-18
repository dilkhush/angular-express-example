var request = require('request');
var json = require('../helpers/json_helper')
var email = require('../helpers/email_generator_helper')

describe('Create User Api',function(){
  var email_id = email.get_email()
  it("Should created a user", function(done) {
    var user = {form: { name: 'Dilkhush Soni', email: email_id, password: '12345678'}}
    request.post("http://localhost:8080/api/v1/users", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('User created')
      expect(body.status).toEqual(201)
      done();
    });
  }, 250);

  it("Should created not create a user when with this email user already exist", function(done) {
    var user = {form: { name: 'Dilkhush Soni', email: email_id, password: '12345678'}}
    request.post("http://localhost:8080/api/v1/users", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.status).toEqual(422)
      done();
    });
  }, 250);

  it("Should created not create a user when with email is not passed", function(done) {
    var email_id = email.get_email()
    var user = {form: { name: 'Dilkhush Soni', password: '12345678'}}
    request.post("http://localhost:8080/api/v1/users", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Validation failed')
      expect(body.status).toEqual(422)
      done();
    });
  }, 250);

  it("Should created not create a user when with name is not passed", function(done) {
    var email_id = email.get_email()
    var user = {form: { email: email_id, password: '12345678'}}
    request.post("http://localhost:8080/api/v1/users", user, function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('Validation failed')
      expect(body.status).toEqual(422)
      done();
    });
  }, 250);
})
