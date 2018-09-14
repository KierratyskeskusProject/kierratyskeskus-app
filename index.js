const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// open database in memory
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to database');
  return null;
});

db.serialize(() => {
  db.run('CREATE TABLE test');
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
  return null;
});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
