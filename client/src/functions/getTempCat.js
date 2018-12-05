const getTemplateCategory = (category, Categories, template, init, bookData) => {
  const newState = { ...init };

  const cat = { label: null, value: null };
  for (let i = 0; i < Categories.length; i++) {
    if (Categories[i].name === category) {
      cat.label = Categories[i].name;
      cat.value = Categories[i].value;
      newState.category = cat;
    }
  }

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


  // template.templates[0][cat.value].content
  const defaultValues = {
    title: newState.title,
    description: newState.description,
    category: [newState.category],
  };

  return defaultValues;
};

export default getTemplateCategory;

// dispatch(load(defaultValues));
