import React from 'react';
import { LocalizationProvider } from '../localization/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { defaultTheme } from '../../theme/themes';
import { ReduxState } from '../../store';
interface IAppProviders {
  children: React.ReactNode;
  store: ReduxState;
}

export const AppProviders = ({
  children,
  store,
}: IAppProviders): JSX.Element => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </ThemeProvider>
  </Provider>
);
