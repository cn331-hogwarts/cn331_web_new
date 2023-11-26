import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RegisterPage from '../src/components/pages/Register';

const mockStore = configureStore();

describe('RegisterPage Component', () => {
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

  test('renders RegisterPage component', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/register']} initialIndex={0}>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const retypePasswordInput = getByPlaceholderText('Retype Password');
    const registerButton = getByText('Register');

    // Example: You can interact with the form elements using fireEvent
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(retypePasswordInput, { target: { value: 'password123' } });

    fireEvent.click(registerButton);

    // Add assertions here based on your component behavior
    expect(getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Retype Password')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();

  });

  // Add more test cases as needed
});
