import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signin from '../src/components/pages/Signin';

const mockStore = configureStore([]);

describe('Signin Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
      },
    });
  });

  test('renders signin form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Signin />
        </MemoryRouter>
      </Provider>
    );

    // Check if the main title is rendered
    const mainTitleElement = screen.getByText(/Sign in/i);
    expect(mainTitleElement).toBeInTheDocument();

    // Check if form inputs are rendered
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signinButton = screen.getByText(/signin/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();
  });

  test('submits signin form with valid data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Signin />
        </MemoryRouter>
      </Provider>
    );

    // Fill out the form
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signinButton = screen.getByText(/signin/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Mock the login action
    store.dispatch = jest.fn();

    // Click the signin button
    fireEvent.click(signinButton);

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the login action was dispatched
      expect(store.dispatch).toHaveBeenCalledWith(
        login({
          email: 'test@example.com',
          password: 'password123',
        })
      );
    });
  });
});
