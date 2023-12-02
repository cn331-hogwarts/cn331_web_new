import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/components/pages/Home';

test('renders home page correctly', () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});
