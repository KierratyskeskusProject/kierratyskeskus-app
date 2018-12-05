import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchImageReducer from './fetchImageReducer';
import fetchWeightReducer from './fetchWeightReducer';
import fetchTemplatesReducer from './fetchTemplatesReducer';
import reducer from './initialDescReducer';
import saveTemplatesReducer from './saveTemplatesReducer';

export default combineReducers({
  initial: reducer,
  form: formReducer,
  images: fetchImageReducer,
  weight: fetchWeightReducer,
  templates: fetchTemplatesReducer,
  saveTemplates: saveTemplatesReducer,
});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
