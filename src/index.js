import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';
//import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>
  ,  document.getElementById('page-top')
);
