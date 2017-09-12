import React from 'react';

export default class TestFunction extends React.Component {
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