const express = require('express');
const router = express.Router();
const path = require('path');

// Put Request
router.put('/', (req, res) => {
    res.send('Got the update PUT  request')
});

module.exports = router;