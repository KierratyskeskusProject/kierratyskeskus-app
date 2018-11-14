const fetch = require('node-fetch');


const fetchData = (identifier) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';
  const queryUrl = url + identifier;
  console.log(queryUrl);

  fetch(queryUrl)
    .then(res => res.json())
    .then((response) => {
      console.log('total items', response.totalItems);
      if (response.totalItems === 0) return null;
      const book = response.items[0].volumeInfo;
      console.log('book', book);
      return book;
    });
  return null;
};

module.exports = fetchData;
