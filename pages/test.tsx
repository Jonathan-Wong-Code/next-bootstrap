import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

/* eslint-disable @typescript-eslint/no-explicit-any*/
function returnValue(obj: any, key: string) {
  return obj[key];
}

export async function getServerSideProps(context) {
  const headers = context.req.headers;
  const locales = returnValue(headers, 'accept-language').split(';');

  const parsedLocales = locales.map((locale, index) => {
    if (index === 0) return locale.split(',')[0];
    return locale.split(',')[1];
  });

  parsedLocales.pop();

  if (context.locale !== parsedLocales[0]) {
    context.res.setHeader(
      'location',
      `${parsedLocales[0]}${context.resolvedUrl}`
    );
    context.res.statusCode = 302;
    context.res.end();
  }

  return {
    props: {
      context: 'Some value',
    },
  };
}

export default function Home(): JSX.Element {
  const { locale, locales } = useRouter();

  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

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
    </>
  );
}
