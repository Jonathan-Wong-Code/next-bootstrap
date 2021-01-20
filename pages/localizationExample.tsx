import React from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { GetServerSidePropsContext } from 'next';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';
import { LocalizationExamplePage } from '../src/pages/localizationExample';
import { setStateAction } from '../src/actions/testActions';
import { selectTestState } from '../src/selectors/testState';
const getPokemon = () =>
  axios
    .get('https://pokeapi.co/api/v2/pokemon/1')
    .then((res) => res.data)
    .catch((e) => Promise.reject(e));

interface IServerSideProps {
  props: {
    dehydratedState: unknown;
  };
}

// Setting type to UNKNOWN for now.
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<IServerSideProps> {
  redirectLocaleUrl(context);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('pokemon', getPokemon);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // MUST CALL THIS DEHYDRATED STATE
    },
  };
}

// This is an example Container. Ideally all API calls/redux calls are made here and passed down to the Page Component.
export default function ExampleContainer(): JSX.Element {
  const { data, isLoading, error, isError } = useQuery('pokemon', getPokemon);
  const { locale: currentLocale, pathname } = useRouter();

  const dispatch = useDispatch();

  const reduxValue = useSelector(selectTestState);
  // This can be named onClick if being sent to a generic component.
  const setNewState = (newState: string) => {
    dispatch(setStateAction(newState));
  };

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
    window.location.href = `/${locale}${pathname}`;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) throw new Error(JSON.stringify(error, null, 2));

  return (
    <>
      <LocalizationExamplePage
        setLocale={setLocale}
        currentLocale={currentLocale}
        pokemonName={data.name}
        setNewState={setNewState}
        currentReduxValue={reduxValue}
      />
    </>
  );
}
