import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Component } from './Component';
import { renderBaseProviders } from '../../test-helpers/testUtils';

jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'en-CA',
  }),
}));

const onClick = jest.fn();

it('renders', () => {
  renderBaseProviders(
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
