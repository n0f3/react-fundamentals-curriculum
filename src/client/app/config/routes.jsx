import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../modules/Main';
import Home from '../modules/Home';
import GetWeatherContainer from '../containers/GetWeatherContainer';

const routes = (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='/getWeather/:location' component={GetWeatherContainer}/>
      </Route>
    </Router>
);

export default routes;
