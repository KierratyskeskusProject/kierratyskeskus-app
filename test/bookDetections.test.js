const { expect } = require('chai');
const handleDetectionData = require('../server/controllers/BookDetection/handleDetectionData');
const responseText = require('./testData/responseText');
const responseTextFail = require('./testData/responseTextFail');


describe('Test functions for book detection', () => {
  it('should return a ISBN as a string', () => {
    const filter = handleDetectionData.filter(responseText);
    expect(filter).to.be.string;
    expect(filter).to.be.equal('978-951-31-8193-2');
  });
  it('should return null if no ISBN', () => {
    const filter = handleDetectionData.filter(responseTextFail);
    expect(filter).to.be.null;
  });
});
