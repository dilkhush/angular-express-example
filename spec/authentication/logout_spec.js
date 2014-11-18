var request = require('request');
var json = require('../helpers/json_helper')

describe('For Logout Api',function(){
  var access_token = null;
  it("User should get be loggedin", function(done) {
    var user = {form: { email: 'dilkhush1@gmail.com', password: '12345678'}}
    request.post("http://localhost:8080/login", user, function(error, response, body){
      var body = json.parse_body(body)
      access_token = body.user.access_token
      expect(body.message).toEqual('LoggedIn Successgully')
      expect(body.status).toEqual(201)
      done();
    });
  }, 250);
  it("User should Logout", function(done) {
    request.del("http://localhost:8080/logout?access_token="+access_token,function(error, response, body){
      var body = json.parse_body(body)
      expect(body.message).toEqual('LoggedOut Successgully')
      expect(body.status).toEqual(200)
      done();
    });
  }, 250);
})
