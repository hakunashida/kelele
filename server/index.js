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

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);

server.listen(port, function() {
	console.log('App listening on port ' + port);
});

module.exports = app;