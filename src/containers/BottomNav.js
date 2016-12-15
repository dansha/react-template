import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BottomNav extends Component {
  constructor(props){
    super(props);
    this.navigateToCategories = this.navigateToCategories.bind(this);
    this.navigateToLocations = this.navigateToLocations.bind(this);
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container">
          <div className="btn-toolbar" role="toolbar" aria-label="...">
            <div className="row btn-group">
              <div className="col-md-6">
                <button type="button" className="btn btn-primary" onClick={this.navigateToCategories}>Categories</button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-primary" onClick={this.navigateToLocations}>Locations</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  navigateToCategories (){
    this.props.router.push('/');
  } 
  navigateToLocations (){
    this.props.router.push('/locs');
  }

}

export default withRouter(BottomNav);