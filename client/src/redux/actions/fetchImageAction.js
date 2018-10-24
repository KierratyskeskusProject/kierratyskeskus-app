/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  fetchImageBegin,
  fetchImageFailure,
  fetchImageSuccess,
  deleteImageBegin,
  deleteImageFailure,
  deleteImageSuccess,
} from '../types';


const fetchImage = () => {
  const action = (dispatch) => {
    const url = 'http://localhost:5000/capture';
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

const deleteImage = (imageName) => {
  const action = (dispatch) => {
    const url = 'http://localhost:5000/delete_image';
    dispatch(deleteImageBegin());
    const request = axios.post(url, { imageName });

    return request.then(
      response => dispatch(deleteImageSuccess(response, imageName)),
      error => dispatch(deleteImageFailure(error)),
    );
  };
  return action;
};


export { fetchImage, deleteImage };
