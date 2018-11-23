// Testing works by running command 'yarn run test' from client folder
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Main from '../components/Main';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows an item form', () => {
  expect(wrapped.find(Main).length).toEqual(1);
});
