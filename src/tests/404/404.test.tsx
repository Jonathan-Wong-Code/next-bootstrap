import React from 'react';
import FourOhFour from '../../../pages/404';
import { renderBaseProviders } from '../../test-helpers/testUtils';

describe('The 404 Page', () => {
  it('renders', () => {
    renderBaseProviders(<FourOhFour />);
  });
});
