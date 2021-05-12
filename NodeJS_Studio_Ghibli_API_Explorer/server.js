var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 1337;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

var http = require('http');

http.createServer(app).listen(port);

console.log('Server now running at http://localhost:' + port);
