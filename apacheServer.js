var expressPort = 3002;
var app = require('express')();
var fs = require('fs');

app.get('/', function(req, res) {
	fs.readFile('index.html', {encoding: 'utf8'}, function(err, data) {
		if(err) throw err;

		res.send(data);
	});
});

app.listen(expressPort);
