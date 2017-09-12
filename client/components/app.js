import React from 'react';
import TestState from './test-state.js';

export default class App extends React.Component {
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

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <button onClick={this.handleUpdateProps.bind(this)}>Update Label Prop</button>
        <TestState addLabel={this.state.addLabel} minusLabel={this.state.minusLabel} />
      </div>
    );
  }
}