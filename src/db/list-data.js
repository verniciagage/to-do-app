const db = require('./db');

function selectItems() {
    db.each(`SELECT * FROM todolist`, (error, item) => {
        if (error) {
            throw new Error(error.message);
        }
        console.log(item);
    }
    )
}

selectItems();