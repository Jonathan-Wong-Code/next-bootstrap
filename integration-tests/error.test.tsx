import React from 'react';
import ErrorPage from '../pages/_error';
import { renderBaseProviders } from '../src/test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<ErrorPage />);
  });
});
