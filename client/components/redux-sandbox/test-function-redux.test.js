import React from "react";
import { Provider } from "react-redux";
import * as enzyme from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestFunctionRedux from "./test-function-redux";

// Mock fetch() used by TestFunctionRedux > dispatch > loadSomeData
global.fetch = require("jest-fetch-mock");

// Mock redux store with thunk (adds asynchronous dispatching)
const mockStore = configureStore([thunk]);

describe("test-function-redux.js", () => {
  it("Should shallow render with mocked redux store", () => {
    const store = mockStore();

    const wrapper = enzyme.shallow(
      <Provider store={store}>
        <TestFunctionRedux customHandler={() => { console.log("WOAH"); }} />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("Should mount with mocked redux store and thunk", () => {
    const store = mockStore({});

    const wrapper = enzyme.mount(
      <Provider store={store}>
        <TestFunctionRedux customHandler={() => { console.log("WOAH"); }} />
      </Provider>,
    );

    expect(wrapper).toBeDefined();
  });
});
