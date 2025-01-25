const db = require('./db');

function updateItem() {
    // const [item, category, user, priority] = todo;
    const [id,item, category, user, priority]= process.argv.slice(2);
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

updateItem();