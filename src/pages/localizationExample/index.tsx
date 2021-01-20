import React from 'react';
import { useIntl } from 'react-intl';
import { H2 } from './css';
export interface ILocalizationPage {
  setLocale: (locale: string | undefined) => void;
  currentLocale: string;
  pokemonName: string;
  setNewState: (state: string) => void;
  currentReduxValue: string;
}

export const LocalizationExamplePage = ({
  setLocale,
  currentLocale,
  pokemonName,
  setNewState,
  currentReduxValue,
}: ILocalizationPage): JSX.Element => {
  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  return (
    <>
      <H2>
        TEST {greeting} current locale is: {currentLocale}
      </H2>

      <h3>Current redux value is: {currentReduxValue}</h3>

      <p>Data from api: {pokemonName}</p>

      <button onClick={() => setLocale('en-US')}>Set USA</button>
      <button onClick={() => setLocale('en-CA')}>Set Canadian</button>
      <button onClick={() => setLocale('fr-CA')}>Set French</button>
      <button onClick={() => setLocale('')}>Reset</button>
      <br />
      <button onClick={() => setNewState('new state')}>
        Set a new Redux value!
      </button>
    </>
  );
};
