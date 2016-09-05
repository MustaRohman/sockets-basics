var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

// This will start a server and use this express app as a boilerplate
// Anything the express app listens to, the server should also listen to
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Server started!');
})


