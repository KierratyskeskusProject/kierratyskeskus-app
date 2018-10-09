// Testing works by running command 'npm run test' from client folder
import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import AddItemForm from '../components/AddItemForm';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows an item form', () => {
  expect(wrapped.find(AddItemForm).length).toEqual(1);
});
