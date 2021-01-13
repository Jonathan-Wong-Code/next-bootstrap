import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from './Component';

const onClick = jest.fn();

it('renders', () => {
  render(
    <Component
      onClick={onClick}
      name="jon"
      backgroundColor="red"
      color="yellow"
    />
  );

  const component = screen.getByTestId('component');
  expect(component).toHaveStyleRule('color', 'yellow');
  expect(component).toHaveTextContent(/jon/i);
  userEvent.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
