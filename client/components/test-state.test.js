import React from 'react';
import TestState from './test-state';
import * as enzyme from 'enzyme';

describe("test-state.js", () => {
  it("Should shallow render", () => {
    const wrapper = enzyme.shallow(<TestState addLabel="add" minusLabel="minus" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should mount", () => {
    const wrapper = enzyme.mount(<TestState addLabel="add" minusLabel="minus" />);
    expect(wrapper).toBeDefined();
  });

  it("Should add counter by 1 on click add button", () => {
    const wrapper = enzyme.mount(<TestState addLabel="add" minusLabel="minus" />);
    expect(wrapper).toBeDefined();

    const addButton = wrapper.find("#add-button");
    addButton.simulate("click");
    expect(wrapper.state().counter).toBe(1);
  });

  it("Should minus counter by 1 on click minus button", () => {
    const wrapper = enzyme.mount(<TestState addLabel="add" minusLabel="minus" />);
    expect(wrapper).toBeDefined();

    const addButton = wrapper.find("#minus-button");
    addButton.simulate("click");
    expect(wrapper.state().counter).toBe(-1);
  });
});
