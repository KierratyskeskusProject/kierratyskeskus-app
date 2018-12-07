const fs = require('fs');

const readFile = () => JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf8'));

const TemplateRoutes = (app) => {
  // all templates
  app.get('/allTemplates', (req, res) => {
    res.status(200).send(readFile());
  });

  // template by id
  // return default template if id doesen't exist
  app.get('/templateById/:id', (req, res) => {
    const {
      id,
    } = req.params;

    const template = readFile();
    const needle = id.toString();
    let result = template[0];

    for (let i = 0; i < template.length; i++) {
      if (template[i].temp_id === needle) {
        result = template[i];
        i = template.length;
      }
    }
    res.status(200).send(result);
  });

  // All templates with category id
  // return default template if id doesen't exist
  app.get('/templatesByCategory/:catId', (req, res) => {
    const {
      catId,
    } = req.params;

    const templateRes = [];
    const templates = readFile();
    const needle = catId;

    for (let i = 0; i < templates.length; i++) {
      console.log(templates[i].category);
      console.log(needle.toString());
      if (templates[i].category === needle) {
        templateRes.push(templates[i]);
      }
    }
    res.status(200).send(templateRes);
  });


  // template by sub_category id
  app.get('/templateBySubCategory/:subCatId', (req, res) => {
    const {
      subCatId,
    } = req.params;

    const template = readFile();
    const needle = subCatId.toString();
    let result = template[0];

    for (let i = 0; i < template.length; i++) {
      console.log('needle- ', needle);
      console.log('sub cat ', template[i].sub_category);
      if (template[i].sub_category === needle) {
        result = template[i];
        i = template.length;
      }
    }
    res.status(200).send(result);
  });

  app.post('/createTemplate', (req, res) => {
    const {
      template,
    } = req.body;

    const templates = readFile();

    templates.push(template);

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(templates), (error) => {
      if (error) res.status(200).send('error ');
      console.log('Data written to file');
      res.status(200).send('New template is added');
    });
  });

  app.put('/updateTemplate', (req, res) => {
    const {
      updatedTemplate,
    } = req.body;
    const upTemp = [];

    const template = readFile();

    for (let i = 0; i < template.length; i++) {
      if (template[i].temp_id === updatedTemplate.temp_id) {
        upTemp.push(updatedTemplate);
      } else {
        upTemp.push(template[i]);
      }
    }

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(upTemp), (err) => {
      if (err) {
        throw err;
      }
      console.log('File saved!');
      res.status(200).send('Template updated successfully');
    });
  });

  app.delete('/deleteTemplate', (req, res) => {
    const {
      deletedTemplate,
    } = req.body;
    const upTemp = [];

    const template = readFile();

    for (let i = 0; i < template.length; i++) {
      if (template[i].temp_id === deletedTemplate.temp_id) {
        // nothing to push
      } else {
        upTemp.push(template[i]);
      }
    }

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(upTemp), (err) => {
      if (err) {
        throw err;
      }
      console.log('File saved!');
      res.status(200).send('Template deleted successfully');
    });
  });
};

module.exports = TemplateRoutes;
