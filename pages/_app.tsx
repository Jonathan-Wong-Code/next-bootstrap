import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Hydrate } from 'react-query/hydration';
import { AppProps } from 'next/app';
import { AppProviders } from '../src/contexts/AppProviders/AppProviders';
import { GlobalStyle } from '../src/theme/Globals';
import { useStore } from '../src/redux/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <AppProviders store={store}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
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
