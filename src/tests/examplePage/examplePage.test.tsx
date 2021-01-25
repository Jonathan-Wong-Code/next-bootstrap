import React from 'react';
import LocalizationPage from '../../../pages/examplePage';
import { renderAllProviders } from '../../test-helpers/testUtils';
import axios from 'axios';
import { waitForElementToBeRemoved, screen } from '@testing-library/react';

// These page level tests will be for performing integration tests on the entire page.

jest.mock('axios');

const mockResponse = {
  data: {
    name: 'Pikachu',
  },
};

describe('The Localization Page', () => {
  it('renders the page successfully', async () => {
    // This is mocking the axios response
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(mockResponse));

    // Use the options object to pass initial redux state to the test.
    const { container } = renderAllProviders(<LocalizationPage />, {
      reduxState: {
        testState: 'Initial test state',
      },
    });

    // wait for loading to end.
    await waitForElementToBeRemoved(screen.getByText(/loading/i));
    // This is just to show that everything works.
    expect(container).toHaveTextContent(/initial test state/i);
  });
});
