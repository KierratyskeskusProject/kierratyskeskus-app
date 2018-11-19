const axios = require('axios');


const fetchData = async (identifier) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';
  const queryUrl = url + identifier;

  const fetchBooks = await axios.get(queryUrl);
  if (fetchBooks.data.totalItems === 0) return null;
  return fetchBooks.data.items[0].volumeInfo;
};

module.exports = fetchData;
