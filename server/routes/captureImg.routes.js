const ImageCapture = require('../controllers/captureImg.controller');

const CaptureImg = (app) => {
  app.get('/captureImg', (req, res) => {
    const img = ImageCapture();
    res.send(img);
  });
};

module.exports = CaptureImg;
