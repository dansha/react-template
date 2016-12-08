import React from 'react';
import { Nav } from 'react-bootstrap';

const TopNav = () => (

  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">myLocations</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Add</a></li>
          <li><a href="#about">Remove</a></li>
          <li><a href="#contact">Edit</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Alphabetical </a></li>
              <li><a href="#">Grouped</a></li>
              <li><a href="#">Un grouped</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories<span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

);

export default TopNav;