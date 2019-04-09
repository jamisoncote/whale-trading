var express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  axios = require('axios');

// extracting json from the client side request
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// import db
const db = require('./db_connection');

app.get('/', function(req, res) {
  console.log('Home Page Refreshed');
  res.send('hello world');
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on port 3000...");
});