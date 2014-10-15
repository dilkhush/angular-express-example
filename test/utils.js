'use strict'
var db = require('../config/database')
process.env.NODE_ENV = 'test';
process.env.PORT = 8181;

db.test_db_setup();
