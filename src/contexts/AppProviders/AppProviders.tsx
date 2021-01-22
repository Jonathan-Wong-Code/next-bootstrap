import React from 'react';
import { LocalizationProvider } from '../../i18n/LocalizationProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from '../../styles/themes';
import { ReduxState } from '../../redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

interface IAppProviders {
  children: React.ReactNode;
  store: ReduxState;
}

export const AppProviders = ({
  children,
  store,
}: IAppProviders): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
