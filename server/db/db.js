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
  const sql = 'CREATE TABLE IF NOT EXISTS products (id VARCHAR(30) PRIMARY KEY, title VARCHAR(30), description VARCHAR(255), condition VARCHAR(50), price VARCHAR(30), category VARCHAR(20), weight VARCHAR(30), duration VARCHAR(30));';
  db.run(sql);
  db.run('INSERT INTO products(id, title) values(1, "title")');
});

module.exports = db;
