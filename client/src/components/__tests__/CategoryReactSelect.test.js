import React from 'react';
import { mount } from 'enzyme';

import Select from '../CategoryReactSelect';
import Root from '../../Root';

let wrapped;
let component;
const props = {
  options: [{ label: 'Uutuudet', value: '1' }],
  label: 'test',
  input: { value: 'test' },
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Select {...props} />
    </Root>,
  );
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
  it('should have an input', () => {
    expect(component.find('input').length).toEqual(1);
  });
});
