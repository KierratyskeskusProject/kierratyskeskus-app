const scale = require('../controllers/weight.controller');

const WeightRoutes = (app) => {
  app.get('/weight', (req, res) => {
    scale.read((error, data) => {
      console.log(data);
      res.send(data);
    });
  });
};

module.exports = WeightRoutes;
