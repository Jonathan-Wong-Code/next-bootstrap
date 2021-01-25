import React from 'react';
import { renderBaseProviders } from '../../../test-helpers/testUtils';
import { HomePage } from '../index';

describe('<HomePage>', () => {
  it('renders', () => {
    renderBaseProviders(<HomePage />);
  });
});
