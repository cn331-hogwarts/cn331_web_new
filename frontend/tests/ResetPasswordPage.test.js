import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResetPasswordPage from '../src/components/pages/ResetPasswordPage';

const mockStore = configureStore([]);

describe('ResetPasswordPage Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
      },
    });
  });

  test('renders ResetPasswordPage correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResetPasswordPage />
        </MemoryRouter>
      </Provider>
    );

    const mainTitleElement = screen.getByText(/Reset Password/i);
    expect(mainTitleElement).toBeInTheDocument();

    const resetPasswordButton = screen.getByText(/Reset Password/i);
    expect(resetPasswordButton).toBeInTheDocument();
  });

  test('submits reset password request with valid data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResetPasswordPage />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    store.dispatch = jest.fn();

    fireEvent.click(screen.getByText(/Reset Password/i));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        resetPassword({
          email: 'test@example.com',
        })
      );
    });
  });
});
