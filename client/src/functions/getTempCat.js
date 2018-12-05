const getTemplateCategory = (category, Categories, template, init, bookData, formFields) => {
  const newState = { ...init };
  const cat = { label: null, value: null };
  for (let i = 0; i < Categories.length; i++) {
    if (Categories[i].name === category) {
      cat.label = Categories[i].name;
      cat.value = Categories[i].value;
      newState.category = cat;
      newState.title = '';
    }
  }
  if (!formFields.simple.fields) {
    console.log('no data in fields');
    if (!bookData) {
      for (let i = 0; i < template.templates[0].length; i++) {
        if (template.templates[0][i].temp_id === cat.value) {
          newState.description = template.templates[0][i].content;
        }
      }
    } else {
      const bd = {
        title: bookData.title,
        text: bookData.description,
        pageCount: bookData.pageCount,
        publisher: bookData.publisher,
        publishedDate: bookData.publishedDate.slice(0, 4),
      };
      const lineBreak = '\n';
      const desc = `${bd.text}${lineBreak}${lineBreak}${bd.publisher}, ${bd.publishedDate}${lineBreak}${bd.pageCount} pages`;

      newState.title = bookData.title;
      newState.description = desc;
    }
  } else {
    newState.title = formFields.simple.values.title ? formFields.simple.values.title : newState.title;
    newState.description = formFields.simple.values.description ? formFields.simple.values.description : newState.description;
  }


  const defaultValues = {
    title: newState.title,
    description: newState.description,
    category: [newState.category],
  };
  return defaultValues;
};

export default getTemplateCategory;

// dispatch(load(defaultValues));
