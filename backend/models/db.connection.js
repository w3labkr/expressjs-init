/**
 * Database Connection
 *
 * @usage
 * const mysql = require("mysql2/promise");
 * const { base: db, pool: dbPool } = require('./models/db.connection');
 *
 * @package W3LabKr
 * @subpackage Node_Express_Init
 * @since Node Express Init 1.0.0
 */
const mysql = require("mysql2/promise");
const path = require("path");
const fs = require("fs");
const fsConf = fs.readFileSync(
  path.join(__dirname, "../configs/database.json"),
  "utf8"
);
const dbConf = JSON.parse(fsConf);
const connection = {};

connection.base = function () {
  console.log(dbConf["base"]);
};

connection.pool = function () {
  console.log(dbConf["pool"]);
};

module.exports = connection;
