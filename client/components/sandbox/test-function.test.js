import React from "react";
import * as enzyme from "enzyme";
import TestFunction from "./test-function";

describe("test-function.js", () => {
  it("Should shallow render", () => {
    const wrapper = enzyme.shallow(<TestFunction customHandler={() => { console.log("WOAH"); }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should mount", () => {
    const wrapper = enzyme.mount(<TestFunction customHandler={() => { console.log("WOAH"); }} />);
    expect(wrapper).toBeDefined();
  });

  it("Should call the custom callback function that was passed in as prop", () => {
    const spy = jest.fn();

    const wrapper = enzyme.mount(<TestFunction customHandler={spy} />);
    expect(wrapper).toBeDefined();

    const addButton = wrapper.find("#callback-button");
    addButton.simulate("click");
    expect(spy).toHaveBeenCalled();
  });
});
