const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

var mysqlPoolConnection  = mysql.createPool({
  connectionLimit : 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

mysqlPoolConnection.getConnection(function(err, connection) {
    if (err) {
        connection.release();
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + mysqlPoolConnection.threadId);
});

module.exports = mysqlPoolConnection;
