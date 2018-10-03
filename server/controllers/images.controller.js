const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');
const path = require('path');
const { googleKey } = require('../config');

const client = new vision.ImageAnnotatorClient({
  keyFilename: googleKey,
});


const createImageName = () => {
  const dir = path.join(__dirname, '../images/');
  const newName = Date.now();
  return `${dir + newName}.jpg`;
};

let image = createImageName();

const Capture = (res) => {
  image = createImageName();
  // to take picture from external web cam add name of device  as parameter to nodeWebcam.create({})
  const anotherCam = nodeWebcam.create();

  anotherCam.capture(image, () => {
    const collection = { labels: [], text: [] };
    const totalObject = {
      imageName: null,
      collection: [],
    };
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
            totalObject.collection = collection;
            totalObject.imageName = image;
            collection.text = textArray;
            res.send(totalObject);
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
