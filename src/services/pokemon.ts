import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

interface useQueryReturnType {
  name: string;
}

export const getPokemon = (): Promise<useQueryReturnType> =>
  axios
    .get('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.data) // Return res.data for convenience.
    .catch((e) => Promise.reject(e)); // Reject promise to send to react-query error.

// Return API fetching hooks here. Will be useful when there's more complex logic for the options in queries/mutations
export const useFetchPokemon = (): UseQueryResult<
  useQueryReturnType,
  Error
> => {
  return useQuery<useQueryReturnType, Error>('pokemon', getPokemon, {
    // onSuccess: () => console.log('run on successful api call'),
    // onError: () => console.log('oops this did not work'),
    // onSettled: () => console.log('I run no matter if we did it or not'),
  });
};
