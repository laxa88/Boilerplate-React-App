import React from "react";

export default function TestFunction() {
  return (
    <div>
      <p>
        <button id="callback-button" onClick={this.props.customHandler}>CUSTOM HANDLER</button>
      </p>
    </div>
  );
}
