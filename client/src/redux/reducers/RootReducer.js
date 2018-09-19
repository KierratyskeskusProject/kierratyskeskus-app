import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import product from './product';
import person from './person';

export default combineReducers({
  form: formReducer,
  product,
  person,
});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
