import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { Provider } from 'react-redux'
import configureStore from './redux/store';

ReactDOM.render(
 <Provider store={configureStore()}>
  <App />
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();

/*
  the provider is what connects react to redux
  when wrapping the entire app component in the provider, we give access to the store on a
*/
