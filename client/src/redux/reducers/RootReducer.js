import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import product from './product';

export default combineReducers({
  product: product,
  form: formReducer
});
