import React from "react";
import ReactDOM from "react-dom";

// Use this block to test a basic React app without Redux
// import App from "./components/app";

// ReactDOM.render(
//   <App />,
//   document.getElementById("root"),
// );

// Use this block to test React with Redux
// Note: In order to debug the Redux store on Chrome, install the Redux plugin for Chrome.
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxApp from "./components/redux-app";
import testReducer from "./components/redux/reducer";

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);
const store = createStore(testReducer, enhancer);
ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById("root"),
);
