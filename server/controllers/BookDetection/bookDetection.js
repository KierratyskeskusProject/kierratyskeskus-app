const fetch = require('node-fetch');
const handleData = require('./handleDetectionData');


const fetchData = (query) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const queryUrl = url + query;
  console.log(queryUrl);

  fetch(queryUrl)
    .then(res => res.json())
    .then(response => JSON.stringify(response));
};
console.log(handleData.combined);
const query = handleData.combined;
fetchData(query);
