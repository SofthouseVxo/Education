import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// ---------------------------------------------------------------------------------------

/*
* No components
*/
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// ---------------------------------------------------------------------------------------


/*
* With Redux
*/
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import reducer from './13-Redux/reducer'

// Making it possible to work with redux devtool, make sure to install in your browser as well
const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Setting up a Provider and store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// ---------------------------------------------------------------------------------------

/*
* ServiceWorker
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

