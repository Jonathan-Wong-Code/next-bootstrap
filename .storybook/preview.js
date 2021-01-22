import { LocalizationProvider } from '../src/i18n/LocalizationProvider';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/themes';
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const withIntl = (Story, context) => {
  return (
    <LocalizationProvider>
      <Story {...context} />
    </LocalizationProvider>
  );
};

export const withTheme = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [
  withIntl,
  withTheme,
  withNextRouter({
    locale: 'en-CA',
  }),
];
