import React from 'react';
import { LocalizationProvider } from '../localization/LocalizationProvider';

interface IAppProviders {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: IAppProviders): JSX.Element => (
  <LocalizationProvider>{children}</LocalizationProvider>
);
