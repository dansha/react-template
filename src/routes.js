import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App';
import Original from './components/Original';

const routes = (
    <Route path='/' component={App} >
        <IndexRoute component={Original} />
        {/*<Route path='locs' component={Locations} />*/}
    </Route>
);

export default routes;