const sqlite3 = require('sqlite3').verbose();

// open database connection for db.serialize
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  return null;
});

// create a table called products in the database
db.serialize(() => {
  const sql = 'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(30), description VARCHAR(255), condition VARCHAR(50), price VARCHAR(30), categories VARCHAR(200), weight VARCHAR(30), images VARCHAR(255));';
  db.run(sql);
});

module.exports = db;
