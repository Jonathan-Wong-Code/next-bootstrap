import React from 'react';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';
import { redirect } from 'next/dist/next-server/server/api-utils';
/* eslint-disable @typescript-eslint/no-explicit-any*/
function returnValue(obj: any, key: string) {
  return obj[key];
}

export async function getServerSideProps(context) {
  redirectLocaleUrl(context);

  return {
    props: {},
  };
}

export default function Home(): JSX.Element {
  const { locale, locales } = useRouter();

  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
  };

  return (
    <>
      <h2>
        TEST {greeting} current locale is: {locale}
      </h2>
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <Link href="/" locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={() => setLocale('en-US')}>Set USA</button>
      <button onClick={() => setLocale('en-CA')}>Set Canadian</button>
      <button onClick={() => setLocale('fr-CA')}>Set French</button>
      <button onClick={() => setLocale('')}>Reset</button>
    </>
  );
}
