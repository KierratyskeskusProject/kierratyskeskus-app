const db = require('../db/db.js');

class Product {
  static getAll(callback) {
    db.all('SELECT * FROM products', callback);
  }

  static createItem(data) {
    const sql = `INSERT INTO products(id, title) values(${parseInt(data.id, 10)}, "${data.title}")`;
    db.run(sql, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

module.exports = Product;
