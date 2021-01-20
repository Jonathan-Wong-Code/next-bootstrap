import { LocalizationProvider } from '../src/contexts/localization/LocalizationProvider';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/theme/themes';
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
    <ThemeProvider theme={defaultTheme}>
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
