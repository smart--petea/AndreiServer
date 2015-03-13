var request = require('request');

request.post({
			url: 'http://127.0.0.1:3000', 
			form : {
				msg: 'noroc',
			}
		},
		function(err, httpResponse, body) {
			if(err) throw err;

			console.log(body);
		}
);
