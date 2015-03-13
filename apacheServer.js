var expressPort = 3002;
var app = require('express')();
var fs = require('fs');

app.get('/', function(req, res) {
	res.send('Hello 3002');
});

app.listen(expressPort);
