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
  const sql = 'CREATE TABLE IF NOT EXISTS products (id Int PRIMARY KEY, title VARCHAR(30), photos VARCHAR(500), description VARCHAR(255), condition VARCHAR(50), price Int, category VARCHAR(20), weight Int, duration Int);';
  db.run(sql);
  db.run('INSERT INTO products(id, title) values(1, "title")');
});

module.exports = db;
