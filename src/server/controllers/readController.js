const express = require('express');
const router = express.Router();
const path = require('path');
//const selectItems = require('../../db/list-data.js');
// const db = require('../../db/db');

const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const filepath = 'D:\\Code\\all-stack\\to-do-app\\src\\db\\todo.db'

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
const db = createDbConnection();

function selectItems() {
    // console.log('retreiving item')
    let promise = new Promise((fulfil, reject) => {
        db.all(`SELECT * FROM todolist`, (error, item) => {

            if (error) {
                reject(error)
            } else {
                fulfil(item)
            }
        }
        )


    }
    )
    // console.log(promise);
    return promise;
}



// Get Request
router.get('/', (req, res) => {
    // res.send('Got the read GET request')
    selectItems()
        .then((item) => JSON.stringify(item))
        .then(item => {
            // console.log(`data: ${item}`);
            res.send(item);
        })


});

module.exports = router;