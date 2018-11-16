const fetch = require('node-fetch');


const fetchData = (identifier) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';
  const queryUrl = url + identifier;

  fetch(queryUrl)
    .then(res => res.json())
    .then((response) => {
      if (response.totalItems === 0) return null;
      const book = response.items[0].volumeInfo;
      return book;
    });
  return null;
};

module.exports = fetchData;
