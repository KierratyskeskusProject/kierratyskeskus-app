/* eslint-disable import/prefer-default-export */
import { fetchImageBegin, fetchImageFailure, fetchImageSuccess } from '../types';

const fetchImage = () => {
  const url = 'http://localhost:5000/capture';
  const action = (dispatch) => {
    dispatch(fetchImageBegin());

    const request = fetch(url, {
      method: 'GET',
    });
    return request.then(
      image => image.json(),
    ).then((imageJSON) => {
      dispatch(fetchImageSuccess(imageJSON));
    },
    error => dispatch(fetchImageFailure(error)));
  };
  return action;
};


export { fetchImage };