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

    const mainTitleElement = screen.getByText(/Sign in/i);
    expect(mainTitleElement).toBeInTheDocument();

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

    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const signinButton = screen.getByText(/signin/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    store.dispatch = jest.fn();

    fireEvent.click(signinButton);

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        login({
          email: 'test@example.com',
          password: 'password123',
        })
      );
    });
  });
});
