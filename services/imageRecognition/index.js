const imageCapture = require('./imageCapture');
const imageRecognition = require('./imageRecognition');

const asyncCaptureAndRecognize = async () => {
  console.log('Hello');
  await imageCapture();
  await imageRecognition();
};

module.exports = asyncCaptureAndRecognize;
