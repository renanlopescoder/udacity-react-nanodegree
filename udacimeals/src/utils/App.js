import React, { Component } from 'react';

import AppComponent from '../components/AppComponent'

class App extends Component {
  render() {
    return (
      <AppComponent store={this.props.store} />
    )
  }
}

export default App;
