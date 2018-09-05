import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import product from './product';

export default combineReducers({
  form: formReducer,
  product,
});

/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
