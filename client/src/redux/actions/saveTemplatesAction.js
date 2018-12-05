/* eslint-disable import/prefer-default-export */
import {
  saveTemplatesBegin,
  saveTemplatesFailure,
  saveTemplatesSuccess,
} from '../types';

const saveTemplates = () => async (dispatch, values) => {
  console.log('values in action', values);
  const url = 'http://localhost:5000/createTemplate';
  dispatch(saveTemplatesBegin());
  const request = await fetch(
    url,
    {
      method: 'POST',
      values,
    },
  );
  if (request.status === 200) {
    dispatch(saveTemplatesSuccess(values));
  } else {
    dispatch(saveTemplatesFailure('ERROR', request.error));
  }
};

export { saveTemplates };
