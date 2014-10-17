var bodyParser = require('body-parser');
var database = require('./config/database');
// configure app to use bodyParser()
// this will let us get the data from a POST
exports.init_setup = function(app, config, express){	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	database.db_setup(config);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public/js'));
	app.use(express.static(__dirname + '/public/css'));
	app.use(express.static(__dirname + '/app'));
	app.use(express.static(__dirname + '/lib'));
}

exports.SALT_WORK_FACTOR = 10;