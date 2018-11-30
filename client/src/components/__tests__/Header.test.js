import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  const header = shallow(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  it('renders properly', () => {
    expect(header.find(Header).exists()).toEqual(true);
  });
});
