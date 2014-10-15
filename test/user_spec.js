'use strict';
var utils = require('./utils');
var request = require('supertest');
var should = require('should');
var app = require('../server.js')

describe('User', function () {

  it('User Create', function (done) {
    request(app)
      .post('/api/v1/users')
      .send({name: 'Dilkhush'})
			.expect('Content-Type', /json/)
      .end(function (err, res){
      	if(err) throw err;
      	res.status.should.equal(201);
      done();
    });
  });

  it('User List', function (done) {
    request(app)
      .get('/api/v1/users')
      .end(function (err, res){
      	if(err) throw err;
      	res.status.should.equal(200);
      done();
    });
  });
});