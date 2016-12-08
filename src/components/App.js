import React, { Component } from 'react';
import './App.css';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="main" >
          {this.props.children}
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;
