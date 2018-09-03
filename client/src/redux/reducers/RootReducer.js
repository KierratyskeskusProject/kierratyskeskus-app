import { combineReducers } from 'redux';
import product from './product';

const reducers = {
  product: product
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
