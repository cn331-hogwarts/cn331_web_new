import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import Profile from '../src/components/pages/Profile';

jest.mock('axios');

const mockStore = configureStore([]);

describe('Profile Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        userInfo: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          blood_group: 'A',
          mbti: 'ISTJ',
          email: 'john.doe@example.com',
        },
      },
    });
  });

  test('renders user profile details', () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    // Check if the user profile details are rendered
    const profileTitle = screen.getByText(/User Profile/i);
    const idLabel = screen.getByText(/id:/i);
    const firstNameLabel = screen.getByText(/First Name:/i);
    const lastNameLabel = screen.getByText(/Last Name:/i);
    const bloodGroupLabel = screen.getByText(/Blood Group:/i);
    const mbtiLabel = screen.getByText(/MBTI:/i);
    const emailLabel = screen.getByText(/Email:/i);

    expect(profileTitle).toBeInTheDocument();
    expect(idLabel).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(lastNameLabel).toBeInTheDocument();
    expect(bloodGroupLabel).toBeInTheDocument();
    expect(mbtiLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();

    // Check if the user details are displayed correctly
    expect(screen.getByText(/id: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/First Name: John/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name: Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Blood Group: A/i)).toBeInTheDocument();
    expect(screen.getByText(/MBTI: ISTJ/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: john.doe@example.com/i)).toBeInTheDocument();
  });

  test('allows editing of blood group and mbti fields', async () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );

    // Click the "Edit" button for Blood Group
    fireEvent.click(screen.getByText(/Edit/i));

    // Check if the select element is rendered
    const bloodGroupSelect = screen.getByRole('combobox', { name: /Blood Group:/i });
    expect(bloodGroupSelect).toBeInTheDocument();

    // Select a different blood group
    fireEvent.change(bloodGroupSelect, { target: { value: 'B' } });

    // Click the "Edit" button for MBTI
    fireEvent.click(screen.getByText(/Edit/i));

    // Check if the select element for MBTI is rendered
    const mbtiSelect = screen.getByRole('combobox', { name: /MBTI:/i });
    expect(mbtiSelect).toBeInTheDocument();

    // Select a different MBTI type
    fireEvent.change(mbtiSelect, { target: { value: 'ISFP' } });

    // Mock the axios.put function
    axios.put.mockResolvedValue({});

    // Click the "Edit" button again to submit changes for Blood Group
    fireEvent.click(screen.getByText(/Edit/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the updateProfile function was called with the correct arguments
      expect(axios.put).toHaveBeenCalledWith('http://localhost:8000/updateUserInfo/user/1/', {
        ...store.getState().auth.userInfo,
        blood_group: 'B',
      });
    });

    // Click the "Edit" button again to submit changes for MBTI
    fireEvent.click(screen.getByText(/Edit/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the updateProfile function was called with the correct arguments
      expect(axios.put).toHaveBeenCalledWith('http://localhost:8000/updateUserInfo/user/1/', {
        ...store.getState().auth.userInfo,
        mbti: 'ISFP',
      });
    });
  });
});
