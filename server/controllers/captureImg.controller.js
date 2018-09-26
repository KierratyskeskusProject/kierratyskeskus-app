const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');
const { googleKey } = require('../config/index');

const client = new vision.ImageAnnotatorClient({
  keyFilename: googleKey,
});

const imageCapture = (res) => {
  // to take picture from external web cam add name of device  as parameter to nodeWebcam.create({})
  const anotherCam = nodeWebcam.create();
  anotherCam.capture(`${__dirname}/images/image.jpg`, () => {
    client
      .labelDetection(`${__dirname}/images/image.jpg`)
      .then((results) => {
        const labels = results[0].labelAnnotations;
        const collection = [];
        labels.map(label => collection.push(label.description));
        res.send(collection);
        return collection;
      })
      .catch((err) => {
        res.send('something went wrong');
        console.error('ERROR:', err);
      });
  });
};

module.exports = imageCapture;
