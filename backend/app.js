const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();
const port = 8080;

// Template Engine
app.use(logger("dev"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Static Path
//app.use(express.static(path.join(__dirname, "public")));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Router
app.use("/", require("./routes/index"));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Print listener
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
