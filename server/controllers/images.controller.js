const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
const { googleKey } = require('../config');

const client = new vision.ImageAnnotatorClient({
  keyFilename: googleKey,
});


const createImageName = () => {
  const dir = path.join(__dirname, '../images/');
  const newName = Date.now();
  return `${dir + newName}.jpg`;
};

const imageToBase64 = (file) => {
  const image = fs.readFileSync(file);
  return new Buffer.from(image).toString('base64'); // eslint-disable-line new-cap
};

let image = createImageName();

const Capture = (res) => {
  image = createImageName();
  // to take picture from external web cam add name of device  as parameter to nodeWebcam.create({})
  const anotherCam = nodeWebcam.create();

  anotherCam.capture(image, () => {
    const collection = { labels: [], text: [], imageInBase64: '' };

    client
      .labelDetection(image)
      .then((results) => {
        const labelsArray = [];
        const labels = results[0].labelAnnotations;
        labels.map(label => labelsArray.push(label.description));
        collection.labels = labelsArray;
        client
          .textDetection(image)
          .then((textResults) => {
            const textArray = [];
            const detections = textResults[0].textAnnotations;
            detections.map((text) => {
              textArray.push(text.description);
              return null;
            });
            collection.text = textArray;
            collection.imageInBase64 = imageToBase64(image);
            res.send(collection);
            return collection;
          })
          .catch((err) => {
            res.send(err);
            console.error('ERROR:', err);
          });
      });
  });
};


const Send = (res) => {
  res.sendFile(image);
};


module.exports = { Capture, Send };
