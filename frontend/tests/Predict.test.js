import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Predict from '../src/components/pages/Predict';

const mockStore = configureStore([]);

describe('Predict Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        userInfo: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
        },
      },
    });
  });

  test('renders Predict correctly', () => {
    render(
      <Provider store={store}>
        <Predict />
      </Provider>
    );

    // Check if the main title is rendered
    const mainTitleElement = screen.getByText(/User Profile/i);
    expect(mainTitleElement).toBeInTheDocument();

    // Check if the "Predict" button is rendered
    const predictButton = screen.getByText(/Predict/i);
    expect(predictButton).toBeInTheDocument();
  });

  test('submits prediction request', async () => {
    render(
      <Provider store={store}>
        <Predict />
      </Provider>
    );

    // Mock the axios.post function
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve('prediction_result'),
      })
    );

    // Click the "Predict" button
    fireEvent.click(screen.getByText(/Predict/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the result is displayed
      const resultElement = screen.getByText(/Result:/i);
      expect(resultElement).toBeInTheDocument();
    });

    // Restore the original fetch function
    global.fetch.mockRestore();
  });
});
