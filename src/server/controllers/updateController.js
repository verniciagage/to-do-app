const express = require('express');
const router = express.Router();
const path = require('path');

const db = require('../../db/db');

function updateItem(todo) {
    const id = todo.id;
    const item = todo.item;
    const category = todo.category;
    const user = todo.user;
    const priority = todo.priority;

    db.run(`UPDATE todolist SET item = ?, category = ?, user = ?, priority = ? WHERE id = ?`,
    [item, category, user, priority, id],
    function (error) {
        if (error) {
            console.error(error.message);
        }
        console.log(`Row ${id} has been updated`);
    }
    );
}


// Put Request
router.put('/', (req, res) => {
    console.log('the request made it to the controller')
    updateItem(req.body);
    res.send('Got the update PUT request')
});

module.exports = router;