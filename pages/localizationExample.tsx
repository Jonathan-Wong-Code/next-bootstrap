import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';
import { LocalizationExamplePage } from '../src/pages/localizationExample';
import axios from 'axios';
interface IServerSideProps {
  // Would replace this with actual props return.
  props: {
    someApiValue: string;
    dehydratedState: unknown;
  };
}

const getPokemon = () =>
  axios.get('https://pokeapi.co/api/v2/pokemon/1').then((res) => res.data);

// Setting type to UNKNOWN for now.
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<IServerSideProps> {
  redirectLocaleUrl(context);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: 'pokemon',
    queryFn: getPokemon,
  });

  return {
    props: {
      someApiValue: 'hello i am data',
      dehydratedState: dehydrate(queryClient), // MUST CALL THIS DEHYDRATED STATE
    },
  };
}

export default function Example(): JSX.Element {
  const { data } = useQuery('pokemon', getPokemon);
  const { locale: currentLocale, pathname } = useRouter();

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
    window.location.href = `/${locale}${pathname}`;
  };

  return (
    <LocalizationExamplePage
      setLocale={setLocale}
      currentLocale={currentLocale}
      pokemonName={data.name}
    />
  );
}
