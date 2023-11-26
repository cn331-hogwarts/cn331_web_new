import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ResetPasswordPageConfirm from '../src/components/pages/ResetPasswordPageConfirm';

const mockStore = configureStore([]);

describe('ResetPasswordPageConfirm Component', () => {
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

  test('renders ResetPasswordPageConfirm correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResetPasswordPageConfirm />
        </MemoryRouter>
      </Provider>
    );

    // Check if the main title is rendered
    const mainTitleElement = screen.getByText(/Reset Password here/i);
    expect(mainTitleElement).toBeInTheDocument();

    // Check if the "Reset Password" button is rendered
    const resetPasswordButton = screen.getByText(/Reset Password/i);
    expect(resetPasswordButton).toBeInTheDocument();
  });

  test('submits reset password request with valid data', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResetPasswordPageConfirm />
        </MemoryRouter>
      </Provider>
    );

    // Fill out the form
    const newPasswordInput = screen.getByPlaceholderText(/New password/i);
    const confirmNewPasswordInput = screen.getByPlaceholderText(/Confirm new password/i);
    
    fireEvent.change(newPasswordInput, { target: { value: 'newpassword' } });
    fireEvent.change(confirmNewPasswordInput, { target: { value: 'newpassword' } });

    // Mock the resetPasswordConfirm action
    store.dispatch = jest.fn();

    // Click the "Reset Password" button
    fireEvent.click(screen.getByText(/Reset Password/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the resetPasswordConfirm action was dispatched
      expect(store.dispatch).toHaveBeenCalledWith(
        resetPasswordConfirm({
          uid: 'testuid',
          token: 'testtoken',
          new_password: 'newpassword',
          re_new_password: 'newpassword',
        })
      );
    });
  });
});
