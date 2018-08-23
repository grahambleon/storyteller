import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/containers/App';

it('renders without crashing', () => {
  shallow(<App />);
});
