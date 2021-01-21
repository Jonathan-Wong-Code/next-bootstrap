import React from 'react';
import FourOhFour from '../404';
import { renderBaseProviders } from '../../src/test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<FourOhFour />);
  });
});
