const getTemplateCategory = (category, Categories, template) => {
  const newState = {
    title: '',
    description: null,
    category: [],
  };

  const cat = [{ label: null, value: null }];

  for (let i = 0; i < Categories.length; i++) {
    if (Categories[i].name === category) {
      cat[0].label = Categories[i].label;
      cat[0].value = Categories[i].value;
      newState.category = cat;
    }
  }

  for (let i = 0; i < template.templates[0].length; i++) {
    if (template.templates[0][i].temp_id === cat[0].value) {
      console.log(template.templates[0][i].name);
      newState.description = template.templates[0][i].content;
    }
  }

  return {
    title: newState.title,
    description: newState.description,
    category: [newState.category],
  };
};

export default getTemplateCategory;
