const fs = require('fs');

const readFile = () => {
  const templates = fs.readFileSync(`${__dirname}/data.json`, 'utf8');
  return (
    templates
  );
};

const TemplateRoutes = (app) => {
  // all templates
  app.get('/allTemplates', (req, res) => {
    res.status(200).send(readFile().length === 0 ? [] : JSON.parse(readFile()));
  });

  app.post('/createTemplate', (req, res) => {
    const {
      template,
    } = req.body;

    console.log(template);

    const templates = readFile();
    const newTemplates = templates.length === 0
      ? [template]
      : [...JSON.parse(templates), template];
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(newTemplates), (error) => {
      if (error) res.status(200).send('error ');
      console.log('Data written to file');
      res.status(200).send('New template is added');
    });
  });

  app.put('/updateTemplate', (req, res) => {
    const {
      id,
    } = req.body;
    const templates = JSON.parse(readFile());
    const updatedTemplates = templates.map((template) => {
      const templateJSON = JSON.parse(template);
      if (templateJSON.id === id) {
        return JSON.stringify(req.body);
      }
      return template;
    });

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(updatedTemplates), (err) => {
      if (err) {
        throw err;
      }
      console.log('File saved!');
      res.status(200).send({ message: 'Template updated successfully', updatedTemplates });
    });
  });

  app.delete('/deleteTemplate', (req, res) => {
    const {
      id,
    } = req.body;
    const templates = JSON.parse(readFile());
    const newTemplates = templates.filter((item) => {
      const itemJSON = JSON.parse(item);
      return (itemJSON.id !== id);
    });

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(newTemplates), (err) => {
      if (err) {
        throw err;
      }
      console.log('File saved!');
      res.status(200).send({ message: 'Template deleted successfully', newTemplates });
    });
  });
};

module.exports = TemplateRoutes;
