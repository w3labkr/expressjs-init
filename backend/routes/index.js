/**
 * Router
 *
 * @package W3LabKr
 * @subpackage Express_Init
 * @since Express Init 1.0.0
 */
const express = require("express");
const path = require("path");

const router = express.Router();

const { base: db, pool: dbPool } = require("../models/db.connection");

// Router
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
