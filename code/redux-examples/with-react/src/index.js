import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reducer from './redux/reducer'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Making it possible to work with redux devtool, make sure to install in your browser as well
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Setting up a Provider and store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



