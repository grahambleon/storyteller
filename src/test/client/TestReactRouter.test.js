import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import TestReactRouter from '../../client/containers/TestReactRouter';

describe('<TestReactRouter />', () => {
  let wrapper = shallow(<TestReactRouter />);

  it('renders .test-client', () => {
   expect(wrapper.find('.test-client').length).toBe(1);
  });

  it('.test-client renders text', () => {
    expect(wrapper.find('.test-client').text()).toBe('Testing React Router -- Client Side');
  });

  it('text from .test-client is contained within 2 nodes', () => {
    let nodeLayers = wrapper.findWhere(n => n.text() === 'Testing React Router -- Client Side');
    expect(nodeLayers.length).toBe(2);
  });

});
