const express = require('express');
const http = require('http');
const port = process.env.PORT || 3030;

const app = express();

// Set static content folder
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));

// Set up HTTP server
http.createServer(app).listen(port, () => console.log(`Express server now running at http://localhost:${port}`));