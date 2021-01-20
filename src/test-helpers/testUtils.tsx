import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { LocalizationProvider } from '../contexts/localization/LocalizationProvider';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../src/theme/themes';
interface IRenderProps {
  children: React.ReactNode;
}

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
