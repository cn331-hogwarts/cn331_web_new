import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

test('renders Navbar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navbarElement = screen.getByText(/Navbar/i);
  expect(navbarElement).toBeInTheDocument();
});

test('renders Home page by default', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders About page', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders Profile page', () => {
  render(
    <MemoryRouter initialEntries={['/profile']}>
      <App />
    </MemoryRouter>
  );
  const profileElement = screen.getByText(/Profile/i);
  expect(profileElement).toBeInTheDocument();
});

test('renders Predict page', () => {
  render(
    <MemoryRouter initialEntries={['/predict']}>
      <App />
    </MemoryRouter>
  );
  const predictElement = screen.getByText(/Predict/i);
  expect(predictElement).toBeInTheDocument();
});

test('renders Signin page', () => {
  render(
    <MemoryRouter initialEntries={['/signin']}>
      <App />
    </MemoryRouter>
  );
  const signinElement = screen.getByText(/Signin/i);
  expect(signinElement).toBeInTheDocument();
});

test('renders Register page', () => {
  render(
    <MemoryRouter initialEntries={['/register']} initialIndex={0}>
      <App />
    </MemoryRouter>
  );
});
