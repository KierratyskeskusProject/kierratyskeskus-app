import React from 'react';
import { mount } from 'enzyme';

import Select from '../CategoryReactSelect';

let wrapped;
let component;
const props = {
  label: 'test',
  input: { value: '' },
};

beforeEach(() => {
  wrapped = mount(<Select {...props} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('CategoryReactSelect', () => {
  it('should exist', () => {
    expect(wrapped.find(Select).exists()).toEqual(true);
  });

  it('should have a label', () => {
    expect(wrapped.find('label').contains(<label>test</label>)).toEqual(true);
  });

  it('should have options', () => {
    expect(wrapped.find({ options: [] }).exists()).toEqual(true);
  });
});

describe('CategoryReactSelect Input', () => {
  beforeEach(() => {
    component = wrapped.find(Select);
  });
  it('should have one input', () => {
    expect(component.find('input').length).toEqual(1);
  });
});
