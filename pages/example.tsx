import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';

interface IServerSideProps {
  // Would replace this with actual props return.
  props: unknown;
}

// Setting type to UNKNOWN for now.
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<IServerSideProps> {
  redirectLocaleUrl(context);

  return {
    props: {},
  };
}

export default function Example(): JSX.Element {
  const { locale: currentLocale, locales, pathname } = useRouter();

  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
    window.location.href = `/${locale}${pathname}`;
  };

  return (
    <>
      <h2>
        TEST {greeting} current locale is: {currentLocale}
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
