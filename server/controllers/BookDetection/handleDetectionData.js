const filter = (responseText) => {
  let result = responseText.indexOf(/(ISBN[-]*(1[03])*[ ]*(: ){0,1})*(([0-9Xx][- ]*){13}|([0-9Xx][- ]*){10})/);
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
