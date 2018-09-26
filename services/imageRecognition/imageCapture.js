const nodeWebcam = require('node-webcam');

const imageCapture = async () => {
  const anotherCam = nodeWebcam.create();
  anotherCam.capture('./services/imageRecognition/images/image.jpg', () => {
  });
};

module.exports = imageCapture;
