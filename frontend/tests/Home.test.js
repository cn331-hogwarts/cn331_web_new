import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/components/pages/Home';

test('renders home page correctly', () => {
  // Render the Home component
  const { asFragment } = render(<Home />);

  // Use snapshot testing to compare the rendered output
  expect(asFragment()).toMatchSnapshot();
});
