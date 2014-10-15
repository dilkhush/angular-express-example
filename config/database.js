exports.db_setup = function(config){
	var db_port = config.config.db_port;
	var db_name = config.config.db_name;
	var db_host = config.config.db_host;
	var mongoose   = require('mongoose');
	mongoose.connect('mongodb://'+db_host+':'+db_port+'/'+db_name); // connect to our database
}

exports.test_db_setup = function(){
	var db_port = 27017;
	var db_name = 'testAPI_test';
	var db_host = 'localhost';
	var mongoose   = require('mongoose');
	mongoose.connect('mongodb://'+db_host+':'+db_port+'/'+db_name); // connect to our database	
}