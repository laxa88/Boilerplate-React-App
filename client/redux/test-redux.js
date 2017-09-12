import React from 'react';
import { Provider } from 'react-redux';

export default class TestFunction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={this.store}>
        Hello Redux
      </Provider>
    );
  }
}