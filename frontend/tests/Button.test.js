import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../src/components/Button';

test('Button click event', () => {
  const onClickMock = jest.fn();
  const label = 'Click me';

  const { getByText } = render(
    <Router>
      <Button onClick={onClickMock} buttonStyle="btn--primary" buttonSize="btn--medium" button_link="/path">
        {label}
      </Button>
    </Router>
  );
  const button = getByText(label);

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});