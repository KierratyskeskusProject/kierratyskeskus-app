const fetch = require('node-fetch');
const handleData = require('./handleDetectionData');


const fetchData = (query) => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=ISBN:';
  const queryUrl = url + query;

  fetch(queryUrl)
    .then(res => res.json())
    .then(response => console.log(response));
};
const query = handleData.combined();
fetchData(query);
