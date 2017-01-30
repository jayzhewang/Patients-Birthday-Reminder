import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app/app';
import Welcome from '../welcome/welcome';
import RedirectContainer from '../redirect/redirect_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Welcome }/>
      <Route path='/redirect' component={ RedirectContainer }/>
    </Route>
  </Router>
);

export default AppRouter;
