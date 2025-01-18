const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const filepath = 'D:\\Code\\all-stack\\to-do-app\\src\\db\\todo.db';

function createDbConnection() {
    if (fs.existsSync(filepath)) {
        console.log("Connection with SQLite has been established");
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {

            if (error) {
                return console.error(error.message);
            }
            
            createTable(db);
            console.log("Connection with new SQLite has been established");

        });
        return db;
    }
}

function createTable(db) {
    db.exec(`
    CREATE TABLE todolist
    (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    item VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    user VARCHAR(50),
    priority INTEGER
    );    
        `);
}

module.exports = createDbConnection();