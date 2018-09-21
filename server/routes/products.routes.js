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

    Products.createItem({id: req.body.id, title: req.body.title},
      (err, products) => {
        if (err) return next(err);
        res.send('OK');
      }
    );
  });
};

module.exports = ProductRoutes;
