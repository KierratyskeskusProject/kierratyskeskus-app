import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchImageReducer from './fetchImageReducer';
import fetchWeightReducer from './fetchWeightReducer';

export default combineReducers({
  form: formReducer,
  images: fetchImageReducer,
  weight: fetchWeightReducer,
});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
