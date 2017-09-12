import React from 'react';

export default class TestState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  // Custom functions

  handleAdd() {
    this.setState({ counter: this.state.counter += 1 })
  }

  handleMinus() {
    this.setState({ counter: this.state.counter -= 1 })
  }

  // Lifecycle functions

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <p>
          <button id="add-button" onClick={this.handleAdd.bind(this)}>{this.props.addLabel}</button>&nbsp;
          <button id="minus-button" onClick={this.handleMinus.bind(this)}>{this.props.minusLabel}</button>
        </p>
      </div>
    );
  }
}