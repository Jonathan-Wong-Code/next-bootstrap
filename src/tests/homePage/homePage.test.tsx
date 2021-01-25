import React from 'react';
import HomePage from '../../../pages/index';
import { renderBaseProviders } from '../../test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<HomePage />);
  });
});
