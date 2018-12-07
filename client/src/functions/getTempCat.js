const getTemplateCategory = (category, Categories, template, bookData, formFields) => {
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
      if (!formFields.simple.values.category) {
        newState.category = cat;
      }
    }
  }

  if (!formFields.simple.fields) {
    if (!bookData) {
      for (let i = 0; i < template.templates[0].length; i++) {
        if (template.templates[0][i].temp_id === cat[0].value) {
          console.log(template.templates[0][i].name);
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
    if (formFields.simple.values.category.length > 0) {
      for (let i = 0; formFields.simple.values.category.length > i; i++) {
        newState.category.push(formFields.simple.values.category[i]);
      }
    }
  }

  return {
    title: newState.title,
    description: newState.description,
    category: [newState.category],
  };
};

export default getTemplateCategory;
