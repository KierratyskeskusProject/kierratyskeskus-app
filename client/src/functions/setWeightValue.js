const setWeight = (actualValue, inputValue) => {
  const actualValueString = actualValue.toString();
  if (actualValueString.valueOf() === '0') {
    return inputValue;
  }
  return actualValue;
};

// eslint-disable-next-line import/prefer-default-export
export { setWeight };
