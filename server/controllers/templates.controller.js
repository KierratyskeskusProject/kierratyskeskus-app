// const Templates = () => {

const GetAllTemplates = (res) => {
  console.log('all templates are returned');
  res.status(200).send('all templates');
  return 'hey there';
};

const GetSingleTemplate = (res, id) => {
  console.log('one template with the id', id, 'is returned');

  res.status(200).send(`template with id ${id}`);
  return false;
};

const GetTemplatesByCatId = (res, id) => {
  console.log('all templates related to a category with id ', id, ' is returned');
  return false;
};

const CreateTemplate = (res, data) => {
  // temp object /**/
  const moreData = {
    normal: data,
    extra: 'from backend',
  };
  res.status(200).send(moreData);
  // temp data from templates
  return null;
};
// }

module.exports = {
  GetAllTemplates,
  GetSingleTemplate,
  GetTemplatesByCatId,
  CreateTemplate,
};
