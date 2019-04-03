var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  axios = require('axios');

app.get('/', function(req, res) {
    console.log('Home Page Refreshed');
    res.send('hello world');
})

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port 3000...");
  });