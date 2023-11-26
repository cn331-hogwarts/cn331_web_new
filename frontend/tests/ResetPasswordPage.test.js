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

    // Check if the main title is rendered
    const mainTitleElement = screen.getByText(/Reset Password/i);
    expect(mainTitleElement).toBeInTheDocument();

    // Check if the "Reset Password" button is rendered
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

    // Fill out the form
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Mock the resetPassword action
    store.dispatch = jest.fn();

    // Click the "Reset Password" button
    fireEvent.click(screen.getByText(/Reset Password/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the resetPassword action was dispatched
      expect(store.dispatch).toHaveBeenCalledWith(
        resetPassword({
          email: 'test@example.com',
        })
      );
    });
  });
});
