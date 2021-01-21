import React from 'react';
import HomePage from '../index';
import { renderBaseProviders } from '../../src/test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<HomePage />);
  });
});
