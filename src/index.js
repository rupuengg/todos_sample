import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const rootEl = document.getElementById('root');

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
);
