/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  fetchTemplatesBegin,
  fetchTemplatesFailure,
  fetchTemplatesSuccess,
  saveTemplatesBegin,
  saveTemplatesFailure,
  saveTemplatesSuccess,
} from '../types';

const fetchTemplates = () => async (dispatch) => {
  const url = 'http://localhost:5000/allTemplates';
  dispatch(fetchTemplatesBegin());
  const request = await axios.get(url);
  const templates = request.data;
  console.log(request);
  if (request.status === 200) {
    console.log('in try', templates);
    dispatch(fetchTemplatesSuccess(templates));
  } else {
    dispatch(fetchTemplatesFailure('ERROR', request.error));
  }
};


const saveTemplates = values => async (dispatch) => {
  console.log('values in action', values);
  const url = 'http://localhost:5000/createTemplate';
  dispatch(saveTemplatesBegin());
  const request = await axios.post(url,
    {
      template: values,
    });
  if (request.status === 200) {
    dispatch(saveTemplatesSuccess(values));
  } else {
    dispatch(saveTemplatesFailure('ERROR', request.error));
  }
};

export { fetchTemplates, saveTemplates };
