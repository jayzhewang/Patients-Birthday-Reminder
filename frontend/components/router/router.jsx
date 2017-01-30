import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app/app';
import Welcome from '../welcome/welcome';


const AppRouter = () => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Welcome}/>
    </Route>
  </Router>
);

export default AppRouter;
