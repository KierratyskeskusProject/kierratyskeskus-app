import axios from 'axios';
import { postFormSuccess } from '../types';

const postForm = (values) => {
  const request = axios.post('http://localhost:5000/products', values);
  return postFormSuccess(request);
};

// eslint-disable-next-line import/prefer-default-export
export { postForm };
