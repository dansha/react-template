import React, { Component } from 'react';
import './App.css';
import BottomNav from '../containers/BottomNav';

class App extends Component {
  render() {
    return (
      <div>
       
        <div className="main" >
          {this.props.children}
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;
