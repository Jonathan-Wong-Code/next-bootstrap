import React from 'react';
import { LocalizationProvider } from '../../i18n/LocalizationProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from '../../theme/themes';
import { ReduxState } from '../../redux/store';

const queryClient = new QueryClient();

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
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
