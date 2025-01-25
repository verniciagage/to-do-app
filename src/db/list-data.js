const db = require('./db');

function selectItems() {
    db.each(`SELECT * FROM todolist`, (error, item) => {
        //console.log('retreiving item')
        if (error) {
            throw new Error(error.message);
        }
        console.log(item);
        return (item);
    }
    )
}

module.exports = function (selectItems) {
}
selectItems();