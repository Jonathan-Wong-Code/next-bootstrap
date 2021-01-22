import React from 'react';

export interface ISectionTwo {
  setLocale: (locale: string | undefined) => void;
  setNewState: (state: string) => void;
}

export function SectionTwo({
  setLocale,
  setNewState,
}: ISectionTwo): JSX.Element {
  return (
    <div style={{ height: '50vh' }}>
      <h2>I am a section that will consume components</h2>
      <button onClick={() => setLocale('en-US')}>Set USA</button>
      <button onClick={() => setLocale('en-CA')}>Set Canadian</button>
      <button onClick={() => setLocale('fr-CA')}>Set French</button>
      <br />
      <button onClick={() => setNewState('new state')}>
        Set a new Redux value!
      </button>
    </div>
  );
}
