const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server/index');

chai.use(chaiHttp);

describe('/GET /', () => {
  it('it should get root endpoint', (done) => {
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
  it('it should get products endpoint', (done) => {
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
  it('it should get /capture endpoint', (done) => {
    chai.request(server)
      .get('/capture')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      }).catch((err) => {
        console.error(err);
      });
  }).timeout(30000);
});
