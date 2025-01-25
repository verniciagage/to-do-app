const express = require('express');
const router = express.Router();
const path = require('path');

const db = require('../../db/db');

async function deleteItem(todo) {
    const [id] = todo.id;
    db.run(`DELETE FROM todolist WHERE id = ?`, [id], function (error) {
      if (error) {
        return console.error(error.message);
      }
      console.log(`Row with the ID ${id} has been deleted`);
    });
  }

// Delete Request
router.delete('/', (req, res) => {
    console.log('Delete request made it to the controller')
    deleteItem(req.body);
    res.send('Got the DELETE  request')
    
});

module.exports = router;