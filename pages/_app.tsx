import React from 'react';

import { AppProps } from 'next/app';
import { AppProviders } from '../src/contexts/AppProviders/AppProviders';
// import { RouteListener } from '../src/components/RouteListener/RouteListener';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
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
