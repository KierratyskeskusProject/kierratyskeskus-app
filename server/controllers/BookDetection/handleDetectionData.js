const filter = (responseText) => {
  let result = responseText.indexOf('ISBN');
  let res = null;

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


module.exports = { filter };
