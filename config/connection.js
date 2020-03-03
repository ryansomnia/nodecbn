const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS,
    database: process.env.MYSQL_DB
});

db.connect(function(err) {
        if (err) throw err;
            console.log("Connected!");  
});
module.exports = db;