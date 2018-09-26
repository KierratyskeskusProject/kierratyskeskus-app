const imageCapture = require('../../services/imageRecognition/imageCapture');
const imageRecognition = require('../../services/imageRecognition/imageRecognition');

const CaptureImgRoute = (app) => {
  app.get('/captureImg', async (req, res) => {
    imageCapture().then(() => {
      imageRecognition().then(data => res.send(data));
    });
  });
};

module.exports = CaptureImgRoute;
