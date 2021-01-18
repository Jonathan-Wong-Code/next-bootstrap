import { LocalizationProvider } from '../src/contexts/localization/LocalizationProvider';
import { withNextRouter } from 'storybook-addon-next-router';

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

export const decorators = [
  withIntl,
  withNextRouter({
    locale: 'en-CA',
  }),
];
