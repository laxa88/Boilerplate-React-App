import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loadSomeData from "./redux/action";
import Sandbox from "./sandbox/sandbox";

class ReduxApp extends React.Component {
  // Lifecycle functions

  componentWillMount() {
    console.log("componentWillMount");
    this.props.dispatch(loadSomeData("/client/components/mock/dummy-data.json"));
    this.props.dispatch(loadSomeData("/client/components/mock/non-existent-data.json"));
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
    const data = this.props.state.data;
    const errorMessage = this.props.state.errorMessage;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello Redux World</h1>
        { data &&
          data.map(item => (
            <div key={item.id}>{item.name}</div>
          ))
        }
        { errorMessage &&
          <div>{ errorMessage }</div>
        }
        <hr />
        <Sandbox />
      </div>
    );
  }
}

ReduxApp.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(ReduxApp);
