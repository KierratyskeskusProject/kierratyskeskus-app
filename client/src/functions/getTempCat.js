const getTemplateCategory = (category, Categories, template, bookData, formFields) => {
  const newState = {
    title: null,
    description: null,
    category: [],
  };

  const cat = [{ label: null, value: null }];

  Categories.forEach((item) => {
    if (item === category) {
      cat[0].label = item.label;
      cat[0].value = item.value;
      if (!formFields.simple.values.category) {
        newState.category = cat;
      }
    }
  });

  // if book data is returned from google books, we don't load a template
  if (!bookData) {
    template.templates[0].forEach((temp) => {
      if (temp.temp_id === cat[0].value) {
        newState.description = temp.content;
      }
    });
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
    newState.description = desc;
    newState.title = bd.title;
  }


  return {
    title: formFields.simple.values.title
      ? formFields.simple.values.title
      : newState.title,
    description: formFields.simple.values.description
      ? formFields.simple.values.description
      : newState.description,
    category: [formFields.simple.values.category
      ? formFields.simple.values.category.forEach((aCategory) => {
        newState.category.push(aCategory);
      }) : newState.category],
  };
};

export default getTemplateCategory;
