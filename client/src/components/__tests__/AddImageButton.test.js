import React from 'react';
import { shallow } from 'enzyme';
import AddImageButton from '../AddImageButton';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<AddImageButton />);
});

it('returns a button and a image', () => {
  expect(wrapped.find('button').length).toEqual(1);
  expect(wrapped.find('i').length).toEqual(1);
});
