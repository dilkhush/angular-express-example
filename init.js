var bodyParser = require('body-parser');
var database = require('./config/database');
// configure app to use bodyParser()
// this will let us get the data from a POST
exports.db_setup = function(app){	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
}