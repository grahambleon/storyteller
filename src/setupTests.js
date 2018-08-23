import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
// import fetch from 'isomorphic-fetch'

configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() => {
    let p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        text: 'Hello from the server!',
        json: function() {
          return {text: 'Hello from the server!'}
        }
      });
    });

    return p;
});
