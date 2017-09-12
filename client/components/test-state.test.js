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
});
