const Products = require('../controllers/products.controller');

const ProductRoutes = (app) => {
  app.get('/products', (req, res) => {
    Products.getAll((err, products, next) => {
      if (err) return next(err);
      res.send(products);
      return null;
    });
  });

  app.post('/products', (req, res) => {
    const {
      id, title, description, condition, price, category, weight, duration,
    } = req.body;
    Products.createItem({
      id, title, description, condition, price, category, weight, duration,
    });
    res.send('OK!');
  });
};

module.exports = ProductRoutes;
