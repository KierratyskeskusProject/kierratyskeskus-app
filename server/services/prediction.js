const fs = require('fs');
const automl = require('@google-cloud/automl').v1beta1;

const prediction = (image) => {
  const clientX = new automl.PredictionServiceClient({
    keyFilename: `${__dirname}/../../googleKey.json`,
  });

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
    .then(responses => responses[0].payload[0].displayName)
    .catch((err) => {
      console.error(err);
    });
};

module.exports = prediction;
