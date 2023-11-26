import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ActivatePage from '../src/components/pages/ActivatePage';

const mockStore = configureStore([]);

describe('ActivatePage Component', () => {
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

  test('renders ActivatePage correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/activate/uid/token']}>
          <Route path="/activate/:uid/:token">
            <ActivatePage />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    // Check if the main title is rendered
    const mainTitleElement = screen.getByText(/Activate Account/i);
    expect(mainTitleElement).toBeInTheDocument();

    // Check if the "Activate Account" button is rendered
    const activateButton = screen.getByText(/Activate Account/i);
    expect(activateButton).toBeInTheDocument();
  });

  test('submits activation form', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/activate/uid/token']}>
          <Route path="/activate/:uid/:token">
            <ActivatePage />
          </Route>
        </MemoryRouter>
      </Provider>
    );

    // Mock the activate action
    store.dispatch = jest.fn();

    // Click the "Activate Account" button
    fireEvent.click(screen.getByText(/Activate Account/i));

    // Wait for the asynchronous actions to complete
    await waitFor(() => {
      // Check if the activate action was dispatched
      expect(store.dispatch).toHaveBeenCalledWith(
        activate({
          uid: 'uid',
          token: 'token',
        })
      );
    });
  });
});
