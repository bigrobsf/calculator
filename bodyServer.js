"use strict";

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var ejs = require('ejs');
var url = require('url');
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("nothing to see here");
});

app.get("/calc", function(req, res) {
  res.render("index");
});

app.post("/calc", function(req, res) {

  var operator = req.body.operator;
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var decimals = req.body.decimals || 2;
  var result = 0;
  var opSymbol = "";

  switch (operator) {
    case "add":
    result = (n1 + n2).toFixed(decimals);
    opSymbol = "+";
    break;

    case "sub":
    result = (n1 - n2).toFixed(decimals);
    opSymbol = "-";
    break;

    case "mult":
    result = (n1 * n2).toFixed(decimals);
    opSymbol = "*";
    break;

    case "div":
    result = (n1 / n2).toFixed(decimals);
    opSymbol = "/";
    break;

    case "mod":
    result = (n1 % n2).toFixed(0);
    opSymbol = "%";
    break;

    default:
    result = "this should never happen";
  }

  console.log(result);
  res.write(`<p>${n1} ${opSymbol} ${n2} = ${result}</p>`);
  res.end();
});

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
