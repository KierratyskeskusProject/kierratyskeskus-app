const express = require('express');
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
  const productsTable = 'CREATE TABLE products (Id Int PRIMARY KEY, title VARCHAR(30), photos VARCHAR(500), description VARCHAR(255))';
  db.run(productsTable);
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  return null;
});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hi');
});
