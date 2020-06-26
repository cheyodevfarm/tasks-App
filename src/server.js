const express = require("express");
const path = require("path");

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

//midlewears
app.use(express.urlencoded({ extended: false }));

//globals variables

//Routes
app.get("/", (req, res) => {
  res.send("hello cheyo");
});

//static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
