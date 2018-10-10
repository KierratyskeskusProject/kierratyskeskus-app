const expect = require('chai').expect; // eslint-disable-line prefer-destructuring
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server/index');

chai.use(chaiHttp);

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});

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

describe('/GET /capture', async () => {
  it('it should get /capture endpoint', (done) => {
    chai.request(server)
      .get('/capture')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        expect(res.body).to.be.an('object');
        this.timeout(10000);
        setTimeout(done, 10000);
      });
  });
});
