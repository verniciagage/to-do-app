const db = require('./db');

function insertItem(todo) {
    const item = todo.item;
    const category = todo.category;
    const user = todo.user;
    const priority = todo.priority;
    //const [item, category, user, priority]= process.argv.slice(2);

    db.run(`INSERT INTO todolist (item, category, user, priority) VALUES (?, ?, ?, ?)`,
        [item, category, user, priority],
        function (error) {
            if (error) {
                console.error(error.message);
            }
            console.log(`Inserted row with ID: ${this.lastID}`);
        }
    );
}

module.exports = function (insertItems) {
}