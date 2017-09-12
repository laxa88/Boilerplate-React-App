import React from 'react';
import TestState from './test-state';
import TestFunction from './test-function';

export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addLabel: "add me",
      minusLabel: "minus me"
    }
  }

  handleUpdateProps() {
    this.setState({
      addLabel: "ADD " + new Date().getMilliseconds(),
      minusLabel: "MINUS " + new Date().getMilliseconds(),
    })
  }

  handleButton() {
    console.log("custom function (handleButton) called.");
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <button onClick={this.handleUpdateProps.bind(this)}>Update Label Prop</button>
        <TestState addLabel={this.state.addLabel} minusLabel={this.state.minusLabel} />
        <TestFunction customHandler={this.handleButton.bind(this)} />
      </div>
    );
  }
}