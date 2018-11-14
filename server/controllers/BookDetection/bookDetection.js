const fetch = require('node-fetch');
const handleData = require('./handleDetectionData');


const fetchData = (query) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const queryUrl = url + query;

  fetch(queryUrl)
    .then(res => res.json())
    .then(response => JSON.stringify(response));
};
const query = handleData.combined();
console.log(handleData.combined, query);
fetchData(query);
