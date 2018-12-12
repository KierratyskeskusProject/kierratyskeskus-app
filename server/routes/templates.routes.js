const fs = require('fs');

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

  app.post('/createTemplate', (req, res) => {
    const { template } = req.body;

    fs.readFile(`${__dirname}/data.json`, (err, data) => {
      if (err) {
        res.status(200).send('something went wrong');
      } else {
        const templates = JSON.parse(data);

        templates.push(template);

        fs.writeFile(`${__dirname}/data.json`, JSON.stringify(templates), (error) => {
          if (error) res.status(500).send('error ');
          console.log('Data written to file');
          res.status(200).send('New template is added');
        });
      }
    });
  });
};

module.exports = TemplateRoutes;

/*
  endpoints:

  allTemplates
  templateById/:id
  templatesByCategory/:catId takes an integer
  templateBySubCategory/:subCatId takes a double eg. 1.2
  createTemplate takes an object temp_id, name, content, category, subcategory

*/
