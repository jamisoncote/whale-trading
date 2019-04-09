var express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  axios = require('axios');

// import db
const db = require('./db_connection');
// import helper methods (jwt, bcrypt)
const helper = require('./helper');

// extracting json from the client side request
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  console.log('Home Page Refreshed');
  res.json({
    message: "hello world"
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on port 3000...");
});