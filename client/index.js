import React from 'react';
import ReactDOM from 'react-dom';

// Use this block to test a basic React app without Redux
// import App from './components/app';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Use this block to test React with Redux
import { Provider } from "react-redux";
import { createStore } from 'redux';
import ReduxApp from './components/redux-app';
import testReducer from './redux/reducer';
let store = createStore(testReducer);
ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
);