import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import formPostReducer from './reducer_form';
export default combineReducers({
  form: formReducer,

});
/*
  combineReducers allowes for more reducers.
  reducers are imported from the reducers folder and added to the default export.
*/
