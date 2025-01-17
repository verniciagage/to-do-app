const express = require('express');
const router = express.Router();
const path = require('path');

// Delete Request
router.delete('/', (req, res) => {
    res.send('Got the DELETE  request')
});

module.exports = router;