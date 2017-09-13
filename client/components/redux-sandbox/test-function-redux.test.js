import React from "react";
import { Provider } from "react-redux";
import * as enzyme from "enzyme";
import configureStore from "redux-mock-store";
import TestFunctionRedux from "./test-function-redux";

const mockStore = configureStore();
const dispatch = jest.fn();

describe("test-function-redux.js", () => {
  it("Should shallow render with mocked redux store", () => {
    const wrapper = enzyme.shallow(
      <Provider store={mockStore({ dispatch })}>
        <TestFunctionRedux customHandler={() => { console.log("WOAH"); }} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  // it("Should mount", () => {
  //   const wrapper = enzyme.mount(<TestFunctionRedux customHandler={() => { console.log("WOAH"); }} />);
  //   expect(wrapper).toBeDefined();
  // });

  // it("Should call the custom callback function that was passed in as prop", () => {
  //   const spy = jest.fn();

  //   const wrapper = enzyme.mount(<TestFunction customHandler={spy} />);
  //   expect(wrapper).toBeDefined();

  //   const addButton = wrapper.find("#callback-button");
  //   addButton.simulate("click");
  //   expect(spy).toHaveBeenCalled();
  // });
});
