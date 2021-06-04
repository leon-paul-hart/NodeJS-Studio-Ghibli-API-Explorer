const express = require('express');
const minify = require('express-minify');
const compression = require('compression')
const http = require('http');
const app = express();

// HTTP server setup
const httpPort = process.env.PORT || 8080;
const httpServer = http.createServer(app)
httpServer.listen(httpPort);

// HTTPS server setup
//var fs = require('fs');
//var https = require('https');
//const httpsPort = process.env.PORT || 8443;
//var privateKey = fs.readFileSync('certificates/key.pem', 'utf8');
//var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');
//var credentials = { key: privateKey, cert: certificate };
//var httpsServer = https.createServer(credentials, app);
//httpsServer.listen(httpsPort);

// set up rate limiter: maximum of {max:} requests per minute
const RateLimit = require('express-rate-limit');

const limiter = new RateLimit({
    windowMs: 1 * 60 * 1000,
    max: 60
});

// apply rate limiter to all requests
app.use(limiter);

// Compress the static resources
app.use(compression())

// Use express-minify to shrink static resource files
app.use(minify());

// Set static content folder
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));

// Console notifications
console.log(`HTTP server listening at http://localhost:${httpPort}`);
//console.log(`HTTPS server listening at http://localhost:${httpsPort}`);