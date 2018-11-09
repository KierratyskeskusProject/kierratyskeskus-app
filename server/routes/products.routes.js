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
      title, description, condition, price, category, weight,
    } = req.body;
    Products.createItem({
      title, description, condition, price, category, weight,
    });
    res.send('OK!');
  });
};

module.exports = ProductRoutes;
