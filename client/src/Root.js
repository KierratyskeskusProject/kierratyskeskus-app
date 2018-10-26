import React from 'react';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';

export default ({ children }) => (
  <Provider store={configureStore()}>
    {children}
  </Provider>
);
registerServiceWorker();
