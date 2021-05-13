const express = require('express');
const router = express.Router();

// Route to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = router;