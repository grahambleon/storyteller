import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import TestReactRouter from './containers/TestReactRouter';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/beeperino' component={TestReactRouter} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
