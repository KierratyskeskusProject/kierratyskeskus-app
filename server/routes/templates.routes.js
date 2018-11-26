const {CreateTemplate} = require('../controllers/templates.controller');



const TemplateRoutes = (app) => {

  //all templates
  app.get('/allTemplates', (req, res) => {
    try{
      GetAllTemplates(res);
    }catch(error){
      res.status(500).send(error);
    }
  });

  //template by id
  app.get('/template/:id', function(req, res) {
    let id = req.params.id;
    try{
      GetSingleTemplate(res, id);
    }catch(error){
      res.status(500).send(error);
    }
  });

  //templates by category id
  app.get('/templates/:cat_id', function(req, res) {
    let cat_id = req.params.cat_id
    res.status(200).send('list of templates related to category = ' + cat_id)
  });

  app.post('/createTemplate', function(req, res){
    const data = req.body.var1;
    try{
      CreateTemplate(data);
    }catch(error){
      res.status(500).send(error);
    }
  });

};

module.exports = TemplateRoutes;
