// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fullscreen from "react-full-screen";

// Components
import Content from './Global/Content';

// Assets
import './Global/css/App.css';

// Data
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  constructor(props) {
      super();
   
      this.state = {
        isFull: false,
      };
   }
 
  goFull = () => {
    this.setState({ isFull: true });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
      <button onClick={this.goFull}>
                Go Fullscreen
          </button>
      <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
        <Content body={children} />
      </Fullscreen>
      </div>
      );
    }
}

export default App;
