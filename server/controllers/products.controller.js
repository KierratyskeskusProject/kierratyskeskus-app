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
      weight,
      images,
    } = data;

    const sql = `INSERT INTO products (title, description, condition, price, categories, weight, images) values("${title}", "${description}", "${condition}", "${price}", "${category}", "${weight}", "${images}")`;
    db.run(sql, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
}

module.exports = Product;
