var pg = require('pg');
var conString = "postgres://postgres:5432@localhost/postgres";

var client = new pg.Client(conString);

// var query = client.query('SELECT NOW() AS "theTime"');
// query.on('row', function(row) {
//     console.log(row);
// });
// query.on('end', function() {
//     client.end();
// });

client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
      //output: date-time format
      client.end();
    });
});    