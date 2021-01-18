import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { LocalizationProvider } from '../contexts/localization/LocalizationProvider';

interface IRenderProps {
  children: React.ReactNode;
}

const renderWithBaseProviders = ({ children }: IRenderProps): JSX.Element => {
  return <LocalizationProvider>{children}</LocalizationProvider>;
};

export const renderBaseProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: renderWithBaseProviders, ...options });
