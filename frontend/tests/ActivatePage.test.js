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

    const mainTitleElement = screen.getByText(/Activate Account/i);
    expect(mainTitleElement).toBeInTheDocument();

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

    store.dispatch = jest.fn();

    fireEvent.click(screen.getByText(/Activate Account/i));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        activate({
          uid: 'uid',
          token: 'token',
        })
      );
    });
  });
});
