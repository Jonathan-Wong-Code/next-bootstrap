import React from 'react';
import { GetServerSidePropsContext } from 'next';

import { useDispatch, useSelector } from 'react-redux';

import { QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { useRouter } from 'next/router';
import { useSetLocale } from '../src/hooks/useSetLocale';

import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';
import { ExamplePage } from '../src/pages/ExamplePage';

import { setStateAction } from '../src/redux/actions/testActions';
import { selectTestState } from '../src/redux/selectors/testState';

import { useFetchPokemon, getPokemon } from '../src/services/pokemon';

interface IServerSideProps {
  props: {
    dehydratedState: DehydratedState;
  };
}

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
export default function ExamplePageContainer(): JSX.Element {
  const { data, isLoading, error, isError } = useFetchPokemon();
  const { locale: currentLocale } = useRouter();
  const { setLocale } = useSetLocale();
  const dispatch = useDispatch();
  const reduxValue = useSelector(selectTestState);

  // This can be named onClick if being sent to a generic component.
  // Anything involving Redux should be in a container.
  const setNewState = (newState: string) => {
    dispatch(setStateAction(newState));
  };

  if (isLoading) return <div>Loading...</div>;

  // This is for development. I especially want to be on guard if Contentful goes boom.
  // In production this will be swallowed by the error page.
  if (isError) throw new Error(JSON.stringify(error, null, 2));

  // Component will be where all API Data/Context/Redux/business logic will be consumed.
  return (
    <>
      <ExamplePage
        setLocale={setLocale}
        currentLocale={currentLocale}
        pokemonName={data.name}
        setNewState={setNewState}
        currentReduxValue={reduxValue}
      />
    </>
  );
}
