/**
 * Database Initialize
 *
 * @package W3LabKr
 * @subpackage Express_Init
 * @since Express Init 1.0.0
 */

const mysql = require("mysql2/promise");
const { base: db, pool: dbPool } = require("./models/db.database");
const database = {};

database.init = function () {
  // ...
};

module.exports = database;
