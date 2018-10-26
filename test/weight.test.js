const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server/index');

chai.use(chaiHttp);

describe('/GET /weight', () => {
    it('shoud get weight endpoint', (done) => {
        chai.request(server)
          .get('/weight')
          .end((err, res) => {
              if (err) {
                  console.log(err);
              }
              expect(res.body).to.be.an('object');
              done();
          });
    });
});