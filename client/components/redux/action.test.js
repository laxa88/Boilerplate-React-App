import React from "react";
import { Provider } from "react-redux";
import * as enzyme from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "jest-fetch-mock";
import loadSomeData from "./action";

// Mock fetch() used by TestFunctionRedux > dispatch > loadSomeData
global.fetch = fetchMock;

// Mock redux store with thunk (adds asynchronous dispatching)
const mockStore = configureStore([thunk]);

describe("action.js", () => {
  // Notes:
  // Redux functions are normally supposed to only return objects that
  // represent the next state. But with "thunk" middleware, we can return
  // functions that perform async actions (e.g. fetch or more dispatches).

  // When testing, we need to wrap this async behaviour in a Promise,
  // otherwise we won't be able to assert the full behaviour.

  it("successfully loads valid URL data", () => {
    const dummyData = { foo: "bar" };
    fetch.mockResponse(JSON.stringify({ foo: "bar" }), { status: 200 });
    const store = mockStore();

    return new Promise((resolve) => {
      store.dispatch(loadSomeData("http://dummy-url.com/"))
        .then(() => {
          expect(store.getActions()).toEqual([
            { type: "LOAD_DATA_BEGIN" },
            { type: "LOAD_DATA_SUCCESS", data: dummyData },
          ]);

          resolve();
        });
    });
  });

  // This example demonstrates how we can loop a test with different inputs.
  const failStatusCodes = [400, 401, 403, 404, 500, 502];
  failStatusCodes.forEach((statusCode) => {
    it(`fails with code ${statusCode}, with errorMessage`, () => {
      fetch.mockResponse("", { status: statusCode });
      const store = mockStore();

      return new Promise((resolve) => {
        store.dispatch(loadSomeData("http://dummy-url.com/"))
          .then(() => {
            expect(store.getActions()).toEqual([
              { type: "LOAD_DATA_BEGIN" },
              { type: "LOAD_DATA_FAIL", errorMessage: "Unknown Error" },
            ]);

            resolve();
          });
      });
    });
  });
});
