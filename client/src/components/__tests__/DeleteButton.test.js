import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from '../DeleteButton';

let wrapped;
const props = {
  action: jest.fn(() => console.log('button clicked')),
};

beforeEach(() => {
  wrapped = shallow(<DeleteButton {...props} />);
});

it('should render one button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});

it('should call onClick with action', () => {
  wrapped.find('button').simulate('click');
  expect(props.action).toHaveBeenCalledTimes(1);
});
