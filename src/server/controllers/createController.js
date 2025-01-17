const express = require('express');
const router = express.Router();
const path = require('path');

// Post Request
router.post('/', (req, res) => {
    res.send('Got the create POST request')
});

module.exports = router;