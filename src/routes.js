import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App';
import Categories from './containers/Categories';
import Locations from './containers/Locations';

const routes = (
    <Route path='/' component={App} >
        <IndexRoute component={Categories} />
        <Route path='locs' component={Locations} />
    </Route>
);

export default routes;