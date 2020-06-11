const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// EXPRESS STATIC MIDDLEWARE - TO SERVE THE FILES IN PUBLIC DIR
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = app;