import React from 'react';
import { shallow } from 'enzyme';
import { ImageButton } from '../AddImageButton';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ImageButton />);
});

it('returns a button and a image', () => {
  expect(wrapped.find('button').length).toEqual(2);
  expect(wrapped.find('i').length).toEqual(1);
});
