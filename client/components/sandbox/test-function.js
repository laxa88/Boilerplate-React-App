import React from "react";
import PropTypes from "prop-types";

export default function TestFunction(props) {
  return (
    <div>
      <p>
        <button id="callback-button" onClick={props.customHandler}>CUSTOM HANDLER</button>
      </p>
    </div>
  );
}

TestFunction.propTypes = {
  customHandler: PropTypes.func.isRequired,
};
