const nodeWebcam = require('node-webcam');
const vision = require('@google-cloud/vision');
const { googleKey } = require('../config');

const client = new vision.ImageAnnotatorClient({
  keyFilename: googleKey,
});


const Capture = (res) => {

  const dir = `${__dirname}/images/`;
  //const newName = Math.random(40).toString(36).replace(/[^a-z]+/g, '');
    const newName = Date.now() + Math.random();
  const image = dir+newName+'.jpg';

  // to take picture from external web cam add name of device  as parameter to nodeWebcam.create({})
  const anotherCam = nodeWebcam.create();

  anotherCam.capture(image, () => {

    const collection = { labels: [], text: [] };
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
