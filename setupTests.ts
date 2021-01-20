import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => jest.clearAllMocks());

jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'en-CA',
  }),
}));
