"use strict";

var express = require('express');
var app = express();
const PORT = 3000;

app.get("/", function(req, res) {
  res.send("nothing to see here");
})

app.get("/add/:num1/:num2", function(req, res) {
  var n1 = Number(req.params.num1);
  var n2 = Number(req.params.num2);
  res.send("" + (n1 + n2));
})

app.get("/sub/:num1/:num2", function(req, res) {
  var n1 = Number(req.params.num1);
  var n2 = Number(req.params.num2);
  res.send("" + (n1 - n2));
})

app.get("/mult/:num1/:num2", function(req, res) {
  var n1 = Number(req.params.num1);
  var n2 = Number(req.params.num2);
  res.send("" + (n1 * n2));
})

app.get("/div/:num1/:num2", function(req, res) {
  var n1 = Number(req.params.num1);
  var n2 = Number(req.params.num2);
  res.send("" + (n1 / n2));
})

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
