import React from 'react';

export default class TestState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    console.log("constructor");
  }

  // Custom functions

  handleAdd() {
    console.log("handleAdd");
    this.setState({ counter: this.state.counter += 1 })
  }

  handleMinus() {
    console.log("handleMinus");
    this.setState({ counter: this.state.counter -= 1 })
  }

  // Lifecycle functions

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.handleAdd.bind(this)}>{this.props.addLabel}</button>&nbsp;
        <button onClick={this.handleMinus.bind(this)}>{this.props.minusLabel}</button>
      </div>
    );
  }
}