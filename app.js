const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Personal Space Welcome");
});

module.exports = app;
