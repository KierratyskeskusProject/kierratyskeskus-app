const imageCapture = require('../../services/imageRecognition/imageCapture');

class ImageCapture {
  static getCapturedImg() {
    imageCapture();
  }
}

module.exports = ImageCapture;
