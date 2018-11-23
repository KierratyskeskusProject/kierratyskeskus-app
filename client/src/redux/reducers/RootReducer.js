import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchImageReducer from './fetchImageReducer';
import fetchWeightReducer from './fetchWeightReducer';
import bookReducer from './bookReducer';

export default combineReducers({
  form: formReducer,
  images: fetchImageReducer,
  weight: fetchWeightReducer,
  book: bookReducer,
});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
