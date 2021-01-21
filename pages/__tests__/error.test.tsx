import React from 'react';
import ErrorPage from '../_error';
import { renderBaseProviders } from '../../src/test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<ErrorPage />);
  });
});
