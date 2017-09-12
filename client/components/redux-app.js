import React from 'react';
import { connect } from 'react-redux';

class ReduxApp extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  // Custom functions

  // Lifecycle functions

  componentWillMount() {
    console.log("componentWillMount");

    this.props.dispatch({ type: "LOAD_DATA_BEGIN" })
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
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello Redux World</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(ReduxApp)
