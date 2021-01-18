import React from 'react';
import { useIntl } from 'react-intl';

export interface ILocalizationPage {
  setLocale: (locale: string | undefined) => void;
  apiData: string;
  currentLocale: string;
}

export const LocalizationExamplePage = ({
  setLocale,
  apiData,
  currentLocale,
}: ILocalizationPage): JSX.Element => {
  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  return (
    <>
      <h2>
        TEST {greeting} current locale is: {currentLocale}
      </h2>

      <p>Mock data from api: {apiData}</p>

      <button onClick={() => setLocale('en-US')}>Set USA</button>
      <button onClick={() => setLocale('en-CA')}>Set Canadian</button>
      <button onClick={() => setLocale('fr-CA')}>Set French</button>
      <button onClick={() => setLocale('')}>Reset</button>
    </>
  );
};
