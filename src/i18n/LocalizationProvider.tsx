import React from 'react';
import { IntlProvider } from 'react-intl';
import { allLocalesMessages } from './messages/messages';
import { useRouter } from 'next/router';

export const supportedLocales = ['en-CA', 'fr-CA', 'en-US', 'es-ES'] as const;
export type SupportedLocale = typeof supportedLocales[number];
interface ILocalizationProvider {
  children: React.ReactNode;
}

export const LocalizationProvider = ({
  children,
}: ILocalizationProvider): JSX.Element => {
  const { locale } = useRouter();
  const messages = allLocalesMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
