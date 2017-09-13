import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import loadSomeData from "../redux/action";

class TestFunctionRedux extends React.Component {
  componentWillMount() {
    console.log("componentWillMount");
    this.props.dispatch(loadSomeData("/client/components/mock/dummy-data.json"));
    this.props.dispatch(loadSomeData("/client/components/mock/non-existent-data.json"));
  }

  render() {
    return (
      <div>
        <p>
          <button id="callback-button" onClick={this.props.customHandler}>CUSTOM HANDLER</button>
        </p>
      </div>
    );
  }
}

TestFunctionRedux.propTypes = {
  customHandler: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(TestFunctionRedux);
