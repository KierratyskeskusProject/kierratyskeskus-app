const db = require('../db/db.js');

class Product {
  static getAll(callback) {
    db.all('SELECT * FROM products', callback);
  }

  static createItem(data, cb) {
    const sql = 'INSERT INTO products(id, title) VALUES (?, ?)';
    db.run(sql, data.id, data.title, cb);
  }
}

module.exports = Product;
