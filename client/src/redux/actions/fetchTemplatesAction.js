/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  fetchTemplatesBegin,
  fetchTemplatesFailure,
  fetchTemplatesSuccess,
} from '../types';

const fetchTemplates = () => async (dispatch) => {
  const url = 'http://localhost:5000/allTemplates';
  dispatch(fetchTemplatesBegin());
  const request = await axios.get(url);
  const templates = request.data;
  try {
    dispatch(fetchTemplatesSuccess(templates));
  } catch (e) {
    dispatch(fetchTemplatesFailure(e));
  }
};
export { fetchTemplates };
