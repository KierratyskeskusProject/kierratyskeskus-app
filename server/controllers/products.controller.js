const db = require('../db/db.js');

class Product {
  static getAll(callback) {
    db.all('SELECT * FROM products', callback);
  }

  static createItem(data) {
    console.log('data', data);
    const {
      title,
      description,
      condition,
      price,
      category,
      duration,
      weight,
    } = data;
    const sql = `INSERT INTO products(id, title, description, condition, price, category, duration, weight) values(${parseInt(data.id, 10)}, "${title}", "${description}", "${condition}", "${price}", "${category}", "${duration}", "${weight}" )`;
    db.run(sql, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

module.exports = Product;
