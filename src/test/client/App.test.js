import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/containers/App';


let wrapper = shallow(<App />);

it('renders properly', () => {
  expect(wrapper.length).toBe(1);
});
