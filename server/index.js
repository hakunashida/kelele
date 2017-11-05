'use strict';

const config	= require('./config'),
	http		= require('http'),
	cors 		= require('cors'),
	express 	= require('express'),
	bodyParser	= require('body-parser'),
	compression	= require('compression'),
	bluebird	= require('bluebird'),
	path		= require('path');

const port = process.env.PORT || config.server.port;

const app = express();
app.config = config;
app.set('port', port);
app.use(compression());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());

const server = http.createServer(app);

// do i need socket io?
/*const io = require('socket.io')(server);
io.set("origins", "*:*");
io.on('connection', function(socket) {
	api.onSocketConnected(socket, indexer);
});*/

server.listen(port, function() {
	console.log('App listening on port ' + port);
});

module.exports = app;