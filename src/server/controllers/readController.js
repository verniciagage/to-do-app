const express = require('express');
const router = express.Router();
const path = require('path');

// Get Request
router.get('/', (req, res) => {
    res.send('Got the read GET request')
});

module.exports = router;