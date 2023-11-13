var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var port = 443 || 80;

app.get("/", function(req, res){
    res.render("index");
});

app.get("/afegir", function(req, res){
  res.render("afegir");
});
app.get("/use", function(req, res){
    res.render("use");
  });

app.listen(port, function(){
    console.log("server is running on port" + port);
});
