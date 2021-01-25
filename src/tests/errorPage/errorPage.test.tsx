import React from 'react';
import ErrorPage from '../../../pages/_error';
import { renderBaseProviders } from '../../test-helpers/testUtils';

describe('The Error Page', () => {
  it('renders', () => {
    renderBaseProviders(<ErrorPage />);
  });
});
