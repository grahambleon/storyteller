import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  );
}
export default Routes;
