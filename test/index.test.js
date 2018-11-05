const { expect } = require('chai');
const chai = require('chai');
const fs = require('fs');
const nock = require('nock');
const response = require('./response');
const { transformData } = require('../server/controllers/images.controller');


const server = require('../server/index');

chai.use(require('chai-http'));

describe('/GET /', () => {
  it('should get root endpoint', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        expect(res.body).to.be.string;
        done();
      });
  });
});

describe('/GET /products', () => {
  it('should get products endpoint', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

describe('/GET /capture', () => {
  beforeEach(() => {
    nock('http://localhost:5000')
      .get('/capture')
      .reply(200, response);
  });
  it('Transforms data into object with label and text detection', async () => {
    const data = await transformData(response);
    expect(typeof data).to.equal('object');
    expect(data.labels[0]).to.equal('facial hair');
    expect(data.text[1]).to.equal('The');
  });
});

describe('/POST /delete_image', () => {
  const fileName = 'test-file';
  it('should post /delete_image endpoint', (done) => {
    fs.writeFile(`./server/images/${fileName}`, 'This is a testing file', () => {
      chai.request(server)
        .post('/delete_image')
        .set('content-type', 'application/json')
        .send({ imageName: fileName })
        .then((res) => {
          expect(res.statusCode).to.equal(200);
          done();
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }).timeout(30000);
});
