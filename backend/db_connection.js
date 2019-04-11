/**
 * create your own env.js file in this directory with 1 line of code:
 * module.exports = { username: "your_psql_username" };
 */

const env = require('./env');
const pg = require('pg');
const conString = `postgres://${env.username}:@localhost:5432/happyendings`;

const client = new pg.Client(conString);

module.exports = {client};

client.connect(function(err) {
    if(err) {
       return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(`Postgres is connected`);
      });
});    

/**
 * ==== HELPFUL POSTGRES COMMANDS ====
 * $ psql database_name => to enter postgres console
 * # \dt => to see tables in database
 * # \l => to see all databases (and owner of db)
 * # SELECT * FROM users; => to see all active users
 * 
 */

