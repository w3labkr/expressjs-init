const express = require("express");
const path = require("path");

const router = express.Router();

const { base: db, pool: dbPool } = require("../models/db.connection");

// Router
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
