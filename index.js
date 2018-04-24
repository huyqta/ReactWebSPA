var express = require('express');
var mysql = require('mysql');
var utf8 = require('utf8');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000);
app.get('/', function(req, res){
  res.render('home');
});

app.get('/category/getAllCategory', function(req, res){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "generaldb"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  var sql = 'SELECT * FROM category LIMIT 9';
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("Result: " + results);
    res.send(results);
  });
  con.end(function(err) {
    if (err) throw err;
    console.log("Disconnected!===");
  });
  console.log("Response: " + res);
});

app.get('/category/getProductByCategory/:uid', function(req, res){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "generaldb"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  var sql = 'SELECT product.*, category.Name as CategoryName FROM product INNER JOIN category ON product.CategoryId = category.Id WHERE product.CategoryId = "' + req.params.uid + '"';
  con.query(sql, function (err, results) {
    if (err) throw err;
    console.log("Result: " + results);
    res.send(results);
  });
  con.end(function(err) {
    if (err) throw err;
    console.log("Disconnected!===");
  });
  console.log("Response: " + res);
});