const url = 'http://localhost:5000/capture';

const TakeImg = () => fetch(url, {
  method: 'GET',
})
  .then(response => response.json())
  .then(responseData => responseData)
  .catch(error => console.warn(error));

export default TakeImg;
