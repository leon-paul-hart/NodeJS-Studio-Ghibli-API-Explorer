const express = require('express');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 1337;

const app = express();

// Route to homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set static content folder
app.use(express.static('public'));

// Set up HTTP server
http.createServer(app).listen(port, () => console.log(`Express server now running at http://localhost:${port}`));

