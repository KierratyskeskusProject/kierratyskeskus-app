import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchImageReducer from './fetchImageReducer';
import fetchWeightReducer from './fetchWeightReducer';
import fetchTemplatesReducer from './fetchTemplatesReducer';
import reducer from './initialDescReducer';

export default combineReducers({
  initial: reducer,
  form: formReducer,
  images: fetchImageReducer,
  weight: fetchWeightReducer,
  templates: fetchTemplatesReducer,
});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
