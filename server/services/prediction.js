const fs = require('fs');
const automl = require('@google-cloud/automl').v1beta1;

const prediction = (image) => {
  const clientX = new automl.PredictionServiceClient({
    keyFilename: `${__dirname}/../../googleKey.json`,
  });
  /*
  const projectId = 'visiontest-219510';
  const computeRegion = 'us-central1';
  const modelId = 'ICN2103541711431110787';
*/
  const projectId = 'kierratyskeskus-214110';
  const computeRegion = 'us-central1';
  const modelId = 'ICN6202573478500245615';


  const modelFullId = clientX.modelPath(projectId, computeRegion, modelId);

  const content = fs.readFileSync(image);

  const params = {};

  const payload = {};
  payload.image = { imageBytes: content };

  return clientX
    .predict({ name: modelFullId, payload, params })
    .then((responses) => {
      const res = responses[0].payload[0].displayName;
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = prediction;
