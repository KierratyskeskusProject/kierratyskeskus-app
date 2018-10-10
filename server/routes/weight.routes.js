const WeightRoutes = (app) => {
  const scale = require('../controllers/weight.controller');

  app.get('/weight', (req, res) => {

    //scale should be here
    res.send('hey');
  });
};

module.exports = WeightRoutes;
