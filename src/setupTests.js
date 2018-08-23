import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

beforeEach(function() {

  global.fetch = jest.fn().mockImplementation(() => {
      let p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return {Id: '123'}
          }
        });
      });

      return p;
  });

});
