import React, { PropTypes } from 'react';

const TopNavView = ({onMenuClicked, onAdd, onDelete, onEdit, full,onOrder}) => (
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
                    <li onClick={() => onAdd()} ><a href="#">Add</a></li>
                    <li onClick={() => onDelete()}><a href="#">Remove</a></li>
                    <li onClick={() => onEdit()}><a href="#">Edit</a></li>
                    {full &&
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li onClick={() =>onOrder('alpha') }><a href="#">Alphabetical </a></li>
                                <li onClick={() => onOrder('grouped')}><a href="#">Grouped</a></li>
                                <li onClick={() => onOrder('ungrouped')}><a href="#">Un grouped</a></li>
                            </ul>
                        </li>
                    }
                    {full &&
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories<span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Category 1</a></li>
                                <li><a href="#">Category 2</a></li>
                                <li><a href="#">Category 3</a></li>
                            </ul>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </nav>
);

TopNavView.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onOrder: PropTypes.func,
    full: PropTypes.bool
}

export default TopNavView;