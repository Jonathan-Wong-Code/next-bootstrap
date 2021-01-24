import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { createStore } from 'redux';
import { rootReducer } from '../redux/reducers';
import { initialState, ReduxState } from '../redux/store';
import { render, RenderResult } from '@testing-library/react';
import { LocalizationProvider } from '../i18n/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/themes';
import { Provider } from 'react-redux';
interface IRenderProps {
  children: React.ReactNode;
}

const renderWithAllProviders = ({ children }: IRenderProps): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const renderWithBaseProviders = ({ children }: IRenderProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider>{children}</LocalizationProvider>
    </ThemeProvider>
  );
};

// Use for testing basic-components and things don't need Redux/React-query
export const renderBaseProviders = (ui: React.ReactElement): RenderResult =>
  render(ui, { wrapper: renderWithBaseProviders });

// You can add more options to be passed to the render here as you need
interface Options {
  reduxState: ReduxState;
}

// Use for container tests mostly when you want to test things that consume redux/react-query
export const renderAllProviders = (
  ui: React.ReactElement,
  options?: Options
): RenderResult => {
  const initState = { ...initialState, ...options.reduxState };
  const store = createStore(rootReducer, initState);
  const wrappedUi = <Provider store={store}>{ui}</Provider>;
  return render(wrappedUi, { wrapper: renderWithAllProviders });
};
