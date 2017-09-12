import React from 'react';
import Sandbox from './sandbox/sandbox';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <hr />
        <Sandbox />
      </div>
    );
  }
}