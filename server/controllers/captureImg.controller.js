const imageCapture = require('../../services/imageRecognition/imageCapture');

class ImageCapture {
  getCapturedImg() {
    imageCapture().then(imageData => imageData);
  }
}

module.exports = ImageCapture;
