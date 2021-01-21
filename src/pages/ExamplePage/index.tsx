import React from 'react';
import { useIntl } from 'react-intl';

import { SectionOne } from './components/SectionOne';
import { SectionTwo } from './components/SectionTwo';

export interface IExamplePage {
  setLocale: (locale: string | undefined) => void;
  currentLocale: string;
  pokemonName: string;
  setNewState: (state: string) => void;
  currentReduxValue: string;
}

// DEPENDING on how Contentful Mapping goes I would look each page to be a presentational Layout container.
export function ExamplePage({
  setLocale,
  currentLocale,
  pokemonName,
  setNewState,
  currentReduxValue,
}: IExamplePage): JSX.Element {
  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  return (
    <>
      <SectionOne
        currentLocale={currentLocale}
        pokemonName={pokemonName}
        currentReduxValue={currentReduxValue}
        greeting={greeting}
      />
      <SectionTwo setNewState={setNewState} setLocale={setLocale} />
    </>
  );
}
