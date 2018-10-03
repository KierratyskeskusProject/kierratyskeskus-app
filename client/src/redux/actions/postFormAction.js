import axios from 'axios';
import { postFormBegin, postFormFailure, postFormSuccess } from '../types';

const postForm = (values) => {
  const action = (dispatch) => {
    dispatch(postFormBegin());

    const request = axios.post('http://localhost:5000/products', values);
    return request.then(
      (formData) => {
        dispatch(postFormSuccess(formData));
      },
      error => dispatch(postFormFailure(error)),
    );
  };

  return action;
};

// eslint-disable-next-line import/prefer-default-export
export { postForm };
