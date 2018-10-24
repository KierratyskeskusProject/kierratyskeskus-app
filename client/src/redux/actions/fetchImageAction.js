/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { fetchImageBegin, fetchImageFailure, fetchImageSuccess } from '../types';

const fetchImage = () => {
  const url = 'http://localhost:5000/capture';
  const action = (dispatch) => {
    dispatch(fetchImageBegin());

    const request = axios.get(url);
    return request.then(image => image.data)
      .then((imageJSON) => {
        dispatch(fetchImageSuccess(imageJSON));
      },
      error => dispatch(fetchImageFailure(error)));
  };
  return action;
};

export { fetchImage };

/* fetch(url, {
      method: 'GET',
    }); */
