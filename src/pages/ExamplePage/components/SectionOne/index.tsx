import React from 'react';
import { H2 } from './css';
interface ISectionOne {
  greeting: string;
  currentLocale: string;
  currentReduxValue: string;
  pokemonName: string;
}

export function SectionOne({
  greeting,
  currentLocale,
  currentReduxValue,
  pokemonName,
}: ISectionOne): JSX.Element {
  return (
    <div style={{ height: '50vh' }}>
      <h2>I am a section that will consume components</h2>
      <H2>
        TEST {greeting} current locale is: {currentLocale}
      </H2>

      <h3>Current redux value is: {currentReduxValue}</h3>

      <p>Data from api: {pokemonName}</p>
    </div>
  );
}
