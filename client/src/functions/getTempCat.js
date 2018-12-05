const getTemplateCategory = (category, Categories, template, init) => {
  const newState = { ...init };

  const cat = { label: null, value: null };
  for (let i = 0; i < Categories.length; i++) {
    if (Categories[i].name === category) {
      cat.label = Categories[i].name;
      cat.value = Categories[i].value;
      newState.category = cat;
    }
  }

  for (let i = 0; i < template.templates[0].length; i++) {
    if (template.templates[0][i].temp_id === cat.value) {
      console.log(template.templates[0][i].name);
      newState.description = template.templates[0][i].content;
    }
  }

  console.log(newState);
  // template.templates[0][cat.value].content
  return {
    title: newState.title,
    description: newState.description,
    category: [newState.category],
  };
};

export default getTemplateCategory;

// dispatch(load(defaultValues));
