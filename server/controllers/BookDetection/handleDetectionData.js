

const text = [];


const filter = (responseText) => {
  let result = responseText.indexOf('ISBN');
  let res = null;
  console.log('response text', result);

  switch (result) {
    case -1:
      break;
    default:
      // ISBN found
      result += 1;
      result = responseText[result];
      res = result;
      break;
  }
  return res;
};

const detection = (responseText) => {
  const detections = responseText;
  detections.forEach((value, index) => {
    if (index < 1) return;
    text.push(value.description);
  });
  console.log('text', text);
  return text;
};

const combined = (responseText) => {
  const identifier = filter(responseText);
  console.log('identifier', identifier);
  return identifier;
};


module.exports = { combined, detection, filter };
