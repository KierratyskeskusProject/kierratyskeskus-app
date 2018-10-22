import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // middleware
import rootReducer from './reducers/RootReducer';

export default function configureStore(initialState = {}) {


  return createStore(
    rootReducer,
   compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  );
}
