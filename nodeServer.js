//socket.io
//ws server
var socketPort = 3001;
var io = require('socket.io')(socketPort);
/*
 //daca ai sa ai nevoie de inregistrare a socketurilor
io.on('connection', function(socket) {
	socket.emit('news', 'privet');
});
*/

//Express.js
//http server
 
var expressPort = 3000;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
	io.emit('news', req.body);
	res.send('Hello World!');
})

var server = app.listen(expressPort, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
})
