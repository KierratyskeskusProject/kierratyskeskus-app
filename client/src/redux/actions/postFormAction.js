import axios from 'axios';
import { postFormSuccess } from '../types';

const postForm = (values, callback) => {
  const request = axios.post('http://localhost:5000/products', values)
    .then(
      () => callback(),
    )
    .catch((error) => {
      // handle error
      console.log(error);
    });

  return postFormSuccess(request);
};

// eslint-disable-next-line import/prefer-default-export
export { postForm };
