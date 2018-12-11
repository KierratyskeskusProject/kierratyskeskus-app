const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server/index');

chai.use(chaiHttp);

describe('/GET /allTemplates', () => {
  it('should get all templates', (done) => {
    chai
      .request(server)
      .get('/allTemplates')
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

describe('/POST /createTemplate', () => {
  it('it should POST a template ', (done) => {
    const template = {
      template: {
        name: 'test name',
        temp_id: '1000',
        content: 'the template content',
        category: '1000',
        sub_category: '1000.1',
      },
    };
    chai
      .request(server)
      .post('/createTemplate')
      .send(template)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
