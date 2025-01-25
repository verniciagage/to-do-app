const db = require('./db');

async function deleteItem() {
    const [id] = process.argv.slice(2);
    db.run(`DELETE FROM todolist WHERE id = ?`, [id], function (error) {
      if (error) {
        return console.error(error.message);
      }
      console.log(`Row with the ID ${id} has been deleted`);
    });
  }
  
  deleteItem();