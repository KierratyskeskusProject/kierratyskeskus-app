const imageCapture = require('../controllers/captureImg.controller');

const CaptureImgRoute = (app) => {
  app.get('/image', async (req, res) => {
    imageCapture(res);
  });
};

module.exports = CaptureImgRoute;
