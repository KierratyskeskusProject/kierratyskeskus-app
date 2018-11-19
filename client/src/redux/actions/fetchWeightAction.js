/* eslint-disable import/prefer-default-export */

import { fetchWeightBegin, fetchWeightSuccess, fetchWeightFailure } from '../types';

const fetchWeight = () => {
  const action = (dispatch) => {
    const url = 'http://localhost:5000/weight';
    dispatch(fetchWeightBegin());
    const request = fetch(url, {
      method: 'GET',
    });
    return request.then(
      weight => weight.json(),
    ).then((weightJSON) => {
      dispatch(fetchWeightSuccess(weightJSON));
    },
    error => dispatch(fetchWeightFailure(error)));
  };
  return action;
};


export { fetchWeight };
