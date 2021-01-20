import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Hydrate } from 'react-query/hydration';
import { AppProps } from 'next/app';
import { AppProviders } from '../src/contexts/AppProviders/AppProviders';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '../src/pages/errorPage';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <AppProviders>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AppProviders>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
