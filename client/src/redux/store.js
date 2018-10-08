import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk'; // middleware
import rootReducer from './reducers/RootReducer';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    applyMiddleware(),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
