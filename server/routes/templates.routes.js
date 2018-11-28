const fs = require('fs');
const Template = require('../controllers/templates.controller');

const TemplateRoutes = (app) => {
  // all templates
  app.get('/allTemplates', (req, res) => {
    fs.readFile(`${__dirname}/data.json`, (err, data) => {
      if (err) {
        res.status(500).send('something went wrong');
      } else {
        const templates = JSON.parse(data);
        res.status(200).send(templates);
      }
    });
  });

  // template by id
  app.get('/template/:id', (req, res) => {
    const { id } = req.params;
    let result = null;
    fs.readFile(`${__dirname}/data.json`, (err, data) => {
      if (err) {
        console.log('in error if');
        // res.status(500).send('something went wrong');
      } else {
        const template = JSON.parse(data);
        const needle = id.toString();

        for (let i = 0; i < template.length; i++) {
          if (template[i].temp_id === needle) {
            result = template[i];
            i = template.length;
          } else {
            result = 'template does not exist';
          }
        }
        console.log(result);
        res.status(200).send(result);
      }
    });
  });


  // templates by category id
  app.get('/templates/:catId', (req, res) => {
    const { catId } = req.params;
    Template.getAllBySubCatId((catId), (err, templatesCat) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      res.status(200).send(templatesCat);

      return null;
    });
  });


  app.post('/createTemplate', (req, res) => {
    const { template } = req.params;

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(template), (err) => {
      if (err) res.status(500).send('error ');
      console.log('Data written to file');
      res.status(200).send('data is written');
    });
  });
};

module.exports = TemplateRoutes;
