/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  fetchTemplatesBegin,
  fetchTemplatesFailure,
  fetchTemplatesSuccess,
  saveTemplatesBegin,
  saveTemplatesFailure,
  saveTemplatesSuccess,
  deleteTemplateBegin,
  deleteTemplateFailure,
  deleteTemplateSuccess,
  saveEditedTemplateBegin,
  saveEditedTemplateFailure,
  saveEditedTemplateSuccess,
} from '../types';

const fetchTemplates = () => async (dispatch) => {
  const url = 'http://localhost:5000/allTemplates';
  dispatch(fetchTemplatesBegin());
  const request = await axios.get(url);
  const templates = request.data;
  if (request.status === 200) {
    dispatch(fetchTemplatesSuccess(templates));
  } else {
    dispatch(fetchTemplatesFailure('ERROR', request.error));
  }
};


const saveTemplates = values => async (dispatch) => {
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

const deleteTemplate = templateToBeDeleted => async (dispatch) => {
  const url = 'http://localhost:5000/deleteTemplate';
  dispatch(deleteTemplateBegin());
  const request = await axios.delete(url, { data: { id: templateToBeDeleted } });
  const templates = request.data.newTemplates;
  if (request.status === 200) {
    dispatch(deleteTemplateSuccess(templates));
  } else {
    dispatch(deleteTemplateFailure('ERROR', request.error));
  }
};

const saveEditedTemplate = editedTemplate => async (dispatch) => {
  const url = 'http://localhost:5000/updateTemplate';
  dispatch(saveEditedTemplateBegin());
  console.log('editedtemplate', editedTemplate);
  const request = await axios.put(url, editedTemplate);
  const templates = request.data.updatedTemplates;
  if (request.status === 200) {
    dispatch(saveEditedTemplateSuccess(templates));
  } else {
    dispatch(saveEditedTemplateFailure('ERROR', request.error));
  }
};

export {
  fetchTemplates,
  saveTemplates,
  deleteTemplate,
  saveEditedTemplate,
};
