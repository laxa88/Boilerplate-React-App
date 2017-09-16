import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Sandbox from "./sandbox/sandbox";
import TestFunctionRedux from "./redux-sandbox/test-function-redux";

class ReduxApp extends React.Component {
  // Custom functions

  handleButton() {
    console.log("custom function (handleButton) called. (REDUX)");
    this.forceUpdate();
  }

  // Lifecycle functions

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
        <TestFunctionRedux customHandler={this.handleButton.bind(this)} />
      </div>
    );
  }
}

ReduxApp.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(ReduxApp);
