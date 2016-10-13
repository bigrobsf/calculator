"use strict";

var express = require('express');
var url = require('url');
const PORT = 3000;

var app = express();

app.get("/", function(req, res) {
  res.send("nothing to see here");
})

app.get("/add", function(req, res) {
  var query = url.parse(req.url, true).query;
  var result = Number(query.num1) + Number(query.num2);
  res.send("" + result);
});

app.get("/sub", function(req, res){
 var query = url.parse(req.url, true).query;
 var result = Number(query.num1) - Number(query.num2);
 res.send("" + result);
});

app.get("/mult", function(req, res){
 var query = url.parse(req.url, true).query;
 var result = Number(query.num1) * Number(query.num2);
 res.send("" + result);
});

app.get("/div", function(req, res){
 var query = url.parse(req.url, true).query;
 var result = Number(query.num1) / Number(query.num2);
 res.send("" + result);
});

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
