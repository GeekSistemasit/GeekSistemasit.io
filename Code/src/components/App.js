// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Global/Content';

// Assets
import './Global/css/App.css';

// Data
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Content body={children} />
      </div>
      );
    }
}

export default App;
