import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import About from '../src/components/pages/About';

test('renders about page content', () => {
  render(<About />);

  const purposeTitle = screen.getByText(/purpose/i);
  const membersTitle = screen.getByText(/members/i);
  const githubReposTitle = screen.getByText(/github repos/i);
  const trackerTitles = screen.getAllByText(/tracker/i);

  expect(purposeTitle).toBeInTheDocument();
  expect(membersTitle).toBeInTheDocument();
  expect(githubReposTitle).toBeInTheDocument();

  expect(trackerTitles).toHaveLength(2);

  trackerTitles.forEach((trackerTitle) => {
    expect(trackerTitle).toBeInTheDocument();
  });
});