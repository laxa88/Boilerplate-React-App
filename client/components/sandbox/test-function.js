import React from 'react';

export default class TestFunction extends React.Component {
  constructor(props) {
    super(props);

    // console.log("constructor");
  }

  // Custom functions

  // Lifecycle functions

  componentWillMount() {
    // console.log("componentWillMount");
  }

  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    // console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log("render");
    return (
      <div>
        <p>
          <button id="callback-button" onClick={this.props.customHandler}>CUSTOM HANDLER</button>
        </p>
      </div>
    );
  }
}