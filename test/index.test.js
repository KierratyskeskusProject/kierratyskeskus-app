const { expect } = require('chai');
const chai = require('chai');
const fs = require('fs');

const server = require('../server/index');

chai.use(require('chai-http'));

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
        expect(res.body).to.be.an('object');
        done();
      }).catch((err) => {
        console.error(err);
      });
  }).timeout(30000);
});

describe('/POST /delete_image', () => {
  const fileName = 'test-file';
  console.log('2', fileName);
  it('it should post /delete_image endpoint', (done) => {
    fs.writeFileSync(`./server/images/${fileName}`, 'This is a testing file', () => {
      console.log('1', fileName);
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
