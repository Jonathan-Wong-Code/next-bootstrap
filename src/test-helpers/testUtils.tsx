import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { initialState, ReduxState } from '../store';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { LocalizationProvider } from '../contexts/localization/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../src/theme/themes';
import { Provider } from 'react-redux';
interface IRenderProps {
  children: React.ReactNode;
  reduxState: ReduxState;
}

const renderWithAllProviders = ({ children }: IRenderProps): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const renderWithBaseProviders = ({ children }: IRenderProps): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </ThemeProvider>
  );
};

export const renderBaseProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: renderWithBaseProviders, ...options });

interface Options {
  reduxState: ReduxState;
}

export const renderAllProviders = (
  ui: React.ReactElement,
  options?: Options
): RenderResult => {
  const initState = { ...initialState, ...options.reduxState };
  const store = createStore(rootReducer, initState);
  const wrappedUi = <Provider store={store}>{ui}</Provider>;
  return render(wrappedUi, { wrapper: renderWithAllProviders });
};
