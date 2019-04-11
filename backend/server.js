var express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  axios = require('axios');

// import db
const db = require('./db_connection');
// import helper methods (jwt, bcrypt)
const helper = require('./helper');

// to extract json from the client side post request
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  console.log('Home Page Refreshed');
  res.json({
    message: "hello world"
  });
});

// register
app.post('/signup', function(req, res) {

  // ensure both fields are filled out
  if (!req.body.email || !req.body.password) {
    return res.sendStatus(403).send({'message': 'username or password not filled out'});
  }
  // ensure email is in a valid format i.e. john@gmail.com
  if (!helper.isValidEmail(req.body.email)) {
    return res.sendStatus(403).send({'message': 'invalid email'});
  }
  const hashPassword = helper.hashPassword(req.body.password);

  const createQuery = `INSERT INTO
    users(id, email, password, created_date, modified_date)
    VALUES($1, $2, $3, $4, $5)
    returning *`;
  const values = [
    // generate unqiue universal identifier (user id)
    uuidv4(),
    req.body.email,
    hashPassword,
    moment(new Date()),
    moment(new Date())
  ];
  const rows = db.query(createQuery, values);
  const token = helper.generateToken(rows[0].id);
  return res.status(201).send({ token });
});

// login
app.post('/login', function (req, res) {

  // ensure both fields are filled out
  if (!req.body.email || !req.body.password) {
    return res.sendStatus(403).send({'message': 'username or password not filled out'});
  }
  // ensure email is in a valid format i.e. john@gmail.com
  if (!helper.isValidEmail(req.body.email)) {
    return res.sendStatus(403).send({'message': 'invalid email'});
  }
  const text = 'SELECT * FROM users WHERE email = $1';
  const rows = db.query(text, [req.body.email]);
  if (!rows[0]) {
    return res.status(403).send({'message': 'username or password is invalid'});
  }
  if(!helper.comparePassword(rows[0].password, req.body.password)) {
    return res.status(403).send({ 'message': 'password is invalid' });
  }
  const token = helper.generateToken(rows[0].id);
  return res.status(200).send({ token });
});

// delete user
app.delete('/user/:id', function(req, res) {
  const deleteQuery = 'DELETE FROM users WHERE id=$1 returning *';
  const rows = db.query(deleteQuery, [req.user.id]);
  if(!rows[0]) {
    return res.status(404).send({'message': 'user not found'});
  }
  return res.status(204).send({ 'message': 'deleted' });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on port 3000...");
});