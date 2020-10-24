const mysql = require("mysql2/promise");
const { base: db, pool: dbPool } = require("./models/db.database");
const database = {};

database.init = function () {
  // ...
};

module.exports = database;
